<?php

$file = "tchat.log";

file_put_contents($file, $_POST['text']."\n", FILE_APPEND);
