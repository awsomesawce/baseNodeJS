#!/usr/bin/env pwsh
# NodeJS helpers for Powershell admin
<#
.Description
Helpers for NodeJS
#>


$GitHubDir = "~/Documents/GitHub"
$script:GitHubDirObj = (Get-Item $GitHubDir)

function Get-NodePSEnvFile {
    <#
    .Description
    Get psenv file if it is defined
    .PARAMETER AsObject
    Returns a [FileInfo] object instead of a string
    .PARAMETER FileLocation
    If `$psenv` variable not found in session, this param allows you to 
    pass in a file location to override the psenv var.
    #>
    [CmdletBinding()]
    param(
        [Parameter(Mandatory = $false)]
        [switch]
        $AsObject,
        [Parameter(Mandatory = $false)]
        [string]
        $FileLocation
    )
    if ($psenv) {
        if (Test-Path $psenv) {
            return (Get-Item $psenv)
        } else {
            return Write-Error -Category ObjectNotFound "`$psenv file not found.  Try passing a filename to -FileLocation, or set the `$psenv variable"
        }
    } else {
        if (!($FileLocation)) {
            throw "`$psenv variable not found.  You must pass a file thru to -FileLocation"
        }
        ($AsObject) ? (return Get-Item $FileLocation) : (return $FileLocation)
    }
}

function getPackageJSONObj {
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
}

