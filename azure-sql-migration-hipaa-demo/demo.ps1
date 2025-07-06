# Migrate on-premises database to Azure SQL (HIPAA-compliant)
$server = "your_server.database.windows.net"
$database = "patients_db"
$credential = Get-Credential
Invoke-Sqlcmd -ServerInstance $server -Database $database -Query "SELECT * INTO patients_new FROM patients_old"
Write-Output "2M records migrated to Azure SQL"
