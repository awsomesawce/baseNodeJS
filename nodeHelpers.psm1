#!/usr/bin/env pwsh
# NodeJS helpers for Powershell admin
<#
.Description
Helpers for NodeJS
#>


<#
.Description
Converts package.json file in current directory as a hashtable
#>
param([string]$File, [switch]$AsHashtable, [int]$Depth = 2)
if ($File) {
    if ($AsHashtable) {
        $pkgjson = Get-Content $File | ConvertFrom-Json -AsHashtable -Depth $Depth
        return $pkgjson
    }
    else {
        $pkgjson = Get-Content $File | ConvertFrom-Json -Depth $Depth
        return $pkgjson
    }
}
else {
    if (Test-Path ./package.json) {
        $pkgjson = ConvertFrom-Json -InputObject "$(Get-Content .\package.json)" -AsHashtable -Depth $Depth
        return $pkgjson
    }
    else { Write-Error "No ./package.json found in current dir" }
}

