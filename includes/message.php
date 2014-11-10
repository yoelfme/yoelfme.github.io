<?php

  $host = 'localhost';
  $user = 'user';
  $password = 'password';
  $bd = 'bd';

  $mysqli = new mysqli($host, $user, $password, $bd);

  // Check connection
  if ($mysqli->connect_error) {
      die('Error de Conexión (' . $mysqli->connect_errno . ') '
              . $mysqli->connect_error);
  }

  // Get parameters and escape for protection and validate is set
  $name = isset($_POST['name'])
            ? $mysqli->real_escape_string($_POST['name'])
            : '';

  $email = isset($_POST['email'])
            ? $mysqli->real_escape_string($_POST['email'])
            : '';

  $subject = isset($_POST['subject'])
            ? $mysqli->real_escape_string($_POST['subject'])
            : '';

  $message = isset($_POST['message'])
            ? $mysqli->real_escape_string($_POST['message'])
            : '';

  // Create statement
  $stmt = $mysqli->prepare("INSERT INTO messages VALUES (?,?,?,?)");
  // Bind parameters
  $stmt->bind_param('ssss', $name,$email,$subject,$message);

  // Execute prepared statement
  $stmt->execute();

  // Close statement
  $stmt->close();

  $mysqli->close();
