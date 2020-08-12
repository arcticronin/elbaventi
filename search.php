<?php

  //$devocercare = isset($_POST['action'])
  $servername = "localhost";
  $username = "root";
  $password = "7fb58c199eae5340cb4c594903dd3441";
  $messages = array();
  $parola = '';

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        $messages[] = 'Connessione malissimo';
    }
    else 
      $messages[] = 'Connessione ochei-fully';       
    
    //echo '</p>';
    $sql = "SELECT * FROM parole.parole ORDER BY RAND() LIMIT 1";
    $result = $conn->query($sql);
    
    if ($result) {
      $row = $result->fetch_assoc();
      $parola = $row["p"];
    } else {
    $messages[] = 'No result';
    }
    $conn->close();
    echo json_encode(
      array(
        'parola' => $parola,
        'messages' => $messages
      )
      );
?>