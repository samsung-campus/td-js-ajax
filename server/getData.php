<?php

$file = "tchat.log";

$content = file_get_contents($file);

echo str_replace("\n", "<br>", $content);