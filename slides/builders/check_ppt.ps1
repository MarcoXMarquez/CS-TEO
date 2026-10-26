try {
    $ppt = New-Object -ComObject PowerPoint.Application
    Write-Host "PowerPoint COM is AVAILABLE!"
    $ppt.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($ppt) | Out-Null
} catch {
    Write-Host "PowerPoint COM not available: $($_.Exception.Message)"
}
