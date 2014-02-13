<?php
	require "lessc.inc.php";
	$less = new lessc;
	$less->addImportDir("/css");
	$less->compile("default.less", "default.less.css");
?>

<!DOCTYPE html> 
<!--[if lt IE 7]><html lang="en" class="ie6"><![endif]--> 
<!--[if IE 7]><html lang="en" class="ie7"><![endif]--> 
<!--[if IE 8]><html lang="en" class="ie8"><![endif]--> 
<!--[if IE 9]><html lang="en" class="ie9"><![endif]--> 
<!--[if (gt IE 9)|!(IE)]><!--><html lang="en"><!--<![endif]-->
<head>
    <title>Welcome to function first - a web design and development portfolio</title>

    <!-- meta data -->
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="description" content="functionfirst is the online portfolio of Web Designer and Developer, Alan Jenkins. As a professional Web Designer and Developer since 2000 I have worked with a variety of SME's and successful brands." />
    <meta name="keywords" content="online portfolio, web designer, web developer, web design, designer, design, developer, portfolio" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Alan Jenkins, alan@functionfirst.co.uk" />
	<meta name="viewport" content="width=device-width,initial-scale=1" />

    <!-- css -->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;subset=latin,latin-ext" rel="stylesheet">
    <link rel="stylesheet" href="/css/default.less.css" type="text/css" media="all" />

	<!--[if IE]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]--> 
	
	<!--[if lt IE 9]>
	<script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
	<![endif]-->
</head>
<body class="<?= $body ?>">

	<nav id="nav" class="nav-menu nav-close">
		<a href="#" class="nav-button" data-navigation="open"><span>Menu</span></a>
	
		<ul>
			<li><a href="#"><span data-hover="About">About</span></a></li>
			<li><a href="#"><span data-hover="Experience">Experience</span></a></li>
			<li><a href="#"><span data-hover="Skills">Skills</span></a></li>
			<li><a href="http://uk.linkedin.com/in/aljenks"><span data-hover="LinkedIn">LinkedIn</span></a></li>
			<li><a href="https://docs.google.com/document/d/1xtrGsfAjW8s9hdqVEkJMyMfiJOYWCiiVVHyKB5Oxtes/edit?usp=sharing"><span data-hover="Download CV">Download CV</span></a></li>
		</ul>
	</nav>


<div class="content">
	<header class="header">
		<h1>functionfirst</h1>
		<h2>the web portfolio of alan jenkins</h2>
	</header>