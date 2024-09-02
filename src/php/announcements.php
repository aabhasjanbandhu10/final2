<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Content-Type: application/json');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "clg";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM announcements";
$result = $conn->query($sql);

$announcements = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $announcements[] = $row['announcement'];
    }
}

echo json_encode($announcements);

$conn->close();
?>
