# Starts the Vite development server for local testing.
$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -LiteralPath $projectRoot

Write-Host "Starting Vite local test server..." -ForegroundColor Cyan
Write-Host "Open: http://localhost:5173/" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server." -ForegroundColor DarkGray

npm.cmd run dev
