$items = Get-ChildItem -Path .\src\components -Filter *.jsx -Recurse

$readme = Get-Content -Path "README.md"
$root = Get-Content -Path .\src\components\AdminLTE.jsx
$rootLine = 0;
$inputs = Get-Content -Path .\src\components\content\Inputs.jsx
$inputsLine = 0;
$exportStarted = $false;
$exportedComponents = @{adminlte=@{name="AdminLTE";inReadme=$false;props=@{}}};
ForEach($line in $root){
    $rootLine++;
    if($line -match "export {"){
        $exportStarted = $true;
        continue;
    }
    if(!$exportStarted){
        continue;
    }
    if($exportStarted -and $line -match "}"){
        $exportStarted = $false;
        continue;
    }
    $comp = ($line -replace ",","").trim()
    $exportedComponents[$comp.toLower()] = @{name=$comp;inReadme=$false;props=@{}}
    #Write-Host $comp
}
ForEach($line in $inputs){
    $inputsLine++;
    if($line -match "export {"){
        $exportStarted = $true;
        continue;
    }
    if(!$exportStarted){
        continue;
    }
    if($exportStarted -and $line -match "}"){
        $exportStarted = $false;
        continue;
    }
    $comp = ($line -replace ",","").trim()
    $exportedComponents[$comp.toLower()] = @{name=$comp;inReadme=$false;props=@{}}
    #Write-Host $comp
}

$currentComp = $null
ForEach($item in $items){
    $content = $item | get-content
    $lineNo = 0;
    $inPropTypes = $false;
    $inDefaultProps = $false;
    $bracketNest = 0;
    $curlyNest = 0;
    $bracesNest = 0;
    $props = @{}
    ForEach($line in $content){
        if($line -match '([a-zA-z]+)\.propTypes'){
            $compName = $Matches[1]
            $currentComp = $exportedComponents[$compName.toLower()]
            if($currentComp -eq $null){
                #Write-Host "$compName not in exports"
                break;
            }else{
                #Write-Host $compName
                $inPropTypes = $true
            }
        }
        if($line -match '([a-zA-z]+)\.defaultProps'){
            $compName = $Matches[1]
            $currentComp = $exportedComponents[$compName.toLower()]
            if($currentComp -eq $null){
                Write-Host "$compName not in exports"
                break;
            }else{
                #Write-Host $compName
                $inDefaultProps = $true
            }
        }
        if($inPropTypes){
            $line = $line -replace "\\.+",""
            $line = $line -replace "/\*.+\*/",""
            if($curlyNest -eq 1){
                if($line -match '([a-zA-Z]+):'){
                    $prop = $Matches[1]
                    if($prop -eq $null -or $prop.Trim().length -eq 0){
                        continue;
                    }
                    $null = $line -match '([a-zA-Z]+):\sPropTypes\.([a-zA-Z]+).*(?(isRequired))'
                    $isReq = $false
                    if($Matches[3] -ne $null){
                        $isReq = $true
                    }
                    $type = $Matches[2]
                    switch($type){
                        'func' {$type='function'}
                        'bool' {$type='boolean'}
                    }
                    #Write-Host " $prop - $type - $isReq"
                    $propObj = $currentComp.props[$prop]
                    if($propObj -eq $null){
                        $propObj = @{}
                        $currentComp.props[$prop] = $propObj
                    }
                    $propObj.propName = $prop
                    $propObj.type = $type
                    $propObj.isRequired = $isReq
                    #Write-Host $line
                }
            }
            #Write-Host $line
            [char[]] $line | foreach {
                switch($_){
                    '{' {$curlyNest++; break;}
                    '}' {$curlyNest--; break;}
                    '(' {$bracesNest++; break;}
                    ')' {$bracesNest--; break;}
                    '[' {$bracketNest++; break;}
                    ']' {$bracketNest--; break;}
                }
            }
            #Write-Host "Curly: $curlyNest, Bracket: $bracketNest, Braces: $bracesNest"
            if($curlyNest -eq 0){
                $inPropTypes = $false
            }
        }
        if($inDefaultProps){
            $line = $line -replace "\\.+",""
            $line = $line -replace "/\*.+\*/",""
            if($curlyNest -eq 1){
                if($line -match '([a-zA-Z]+):'){
                    $prop = $Matches[1]
                    if($prop -eq $null -or $prop.Trim().length -eq 0){
                        continue;
                    }
                    $null = $line -match '([a-zA-Z]+):\s([^,]+)'
                    $defaultProp = $Matches[2]
                    #Write-Host "Default: $prop - $defaultProp"
                    $propObj = $currentComp.props[$prop]
                    if($propObj -eq $null){
                        $propObj = @{}
                        $currentComp.props[$prop] = $propObj
                    }
                    $propObj.defaultProp = $defaultProp;
                    #Write-Host $line
                }
            }
            #Write-Host $line
            [char[]] $line | foreach {
                switch($_){
                    '{' {$curlyNest++; break;}
                    '}' {$curlyNest--; break;}
                    '(' {$bracesNest++; break;}
                    ')' {$bracesNest--; break;}
                    '[' {$bracketNest++; break;}
                    ']' {$bracketNest--; break;}
                }
            }
            #Write-Host "Curly: $curlyNest, Bracket: $bracketNest, Braces: $bracesNest"
            if($curlyNest -eq 0){
                $inDefaultProps = $false
            }
        }
        $lineNo++;
    }
}


$componentsStarted = $false;
$readmeLine = -1;
$currentComp = $null
$propsStarted = $false;
ForEach($line in $readme){
    $readmeLine++;
    if($line -match "## Components"){
        Write-Host "$line"
        $componentsStarted = $true;
    }
    if(!$componentsStarted){
        continue;
    }
    if($line -match "^####\s"){
        $readmeComp = ($line -replace "####","").trim()
        #Write-Host "$readmeComp"
        $comp = $exportedComponents[$readmeComp.toLower()]
        if($comp -eq $null){
            #Write-Host "$readmeComp not in exports"
            $currentComp = $null
        }else{
            $comp.inReadme=$true;
            $comp.readmeStarts=[int]$readmeLine;
            $currentComp = $comp;
        }
    }
    if($currentComp -ne $null){
        $compName = $currentComp.name
        if($line -match "^##### Props"){
            #Write-Host "$($compName) props start in line #$($readmeLine)"
            $currentComp.propsStart = $readmeLine
            continue;
        }
        if($currentComp.propsStart -ne $null){
            if($line -match "\| Name" -and !$propsStarted){
                $propsStarted = $true;
                continue;
            }
            if($line -match "\| --"){
                continue;
            }
            if($line -match "\| "){
                $splitted = $line.split("|") | % { $_.trim() } |? {$_.trim().Length -gt 0}
                $propName = $splitted[0]
                $type = $splitted[1].replace("``", "")
                $default = $splitted[2]
                $desc = $splitted[3]
                $propNameCleared = $propName.replace("**","")
                #Write-Host "Prop $compName.$propName in readme"
                $propObj = $currentComp.props[$propNameCleared]
                if($propObj -ne $null){
                    $propObj.desc = $desc
                    if($type -ne $propObj.type){
                        Write-Host "Typemismatch on $compName.$propNameCleared - code: $($propObj.type), readme: $type"
                    }
                    $propObj.line = $readmeLine
                    #Write-Host "Found $propNameCleared on $compName"
                }else{
                    Write-Host "Did not find $propNameCleared on $compName"
                }
                #Write-Host "Prop $propName type: $type default: $default desc: $desc"
            }
            if(!($line -match "\| ") -and $propsStarted){
                #Write-Host "$($currentComp.name) props end at #$readmeLine"
                $currentComp.propsEnd = $readmeLine
                $propsStarted = $false;
                $currentComp = $null
            }
        }
    }
}
$offset = 0
ForEach($comp in (@() + ($exportedComponents.Values)) |Sort-Object { $_.readmeStarts }){
    if($comp.inReadme){
        ForEach($prop in $comp.props.Values){
            $propName = $($prop.propName)
            if($propName -eq $null -or $propName.length -eq 0){
                continue
            }
            if($prop.isRequired){
                $propName = "**$propName**"
            }
            if($prop.line -ne $null){
                #$readme[$prop.line] = "| $propName | ``$($prop.type)`` | ``$($prop.defaultProp)`` | $($prop.desc) |"
            }elseif($comp.propsEnd -ne $null){
                $end = $comp.propsEnd + $offset
                $firstHalf = $readme[0..($end -1)]
                $secondHalf = $readme[$end..($readme.Length -1)]
                $newLine = "| $propName | ``$($prop.type)`` | ``$($prop.defaultProp)`` | $($prop.desc) |"
                $newReadme = @()
                $newReadme += $firstHalf
                $newReadme += $newLine
                $newReadme += $secondHalf
                $readme = $newReadme
                $offset++
                #$readme = @($readme[0..($end -1)],'new line',$readme[$end..($readme.Length -1)])
                Write-Host "Added missing `"$($prop.propName)`" to `"$($comp.name)`" in line $($end)"
            }
        }
    }else{
        $readme += ""
        $readme += "#### $($comp.name)"
        $readme += ""
        $readme += "##### Props"
        $readme += "| Name    | Type    | Default | Description |"
        $readme += "| --------|---------|---------|-------------|"
        ForEach($prop in $comp.props.Values){
            $propName = $($prop.propName)
            if($propName -eq $null -or $propName.length -eq 0){
                continue
            }
            if($prop.isRequired){
                $propName = "**$propName**"
            }
            $readme += "| $propName | ``$($prop.type)`` | ``$($prop.defaultProp)`` | $($prop.desc) |"
        }

    }
}

$sorted = (@() + ($exportedComponents.Values)) |Sort-Object { $_.readmeStarts }

$Utf8NoBomEncoding = New-Object System.Text.UTF8Encoding $False
[System.Environment]::CurrentDirectory = (Get-Location).Path
[System.IO.File]::WriteAllLines(".\README.md", $readme, $Utf8NoBomEncoding)
