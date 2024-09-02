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

$sql = "SELECT * FROM events";
$result = $conn->query($sql);

$events = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $event = array(
            "title" => $row['title'],
            "description" => $row['description'],
            "image" => $row['image']
        );
        $events[] = $event;
    }
}

echo json_encode($events);

$conn->close();
?>
