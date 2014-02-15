<?php
	$body = "home";

	require "includes/lessc.inc.php";
	$less = new lessc;
	$less->compileFile("css/default.less", "css/default.less.css");

	require "includes/header.php";
?>

	<section class="portfolio">
		<article>
			<header>
				<a href="http://getbuildmate.com" class="view"><span data-hover="Launch the Website"><img src="http://images.functionfirst.co.uk/buildmate_web.jpg" alt="Buildmate - Website" /></span></a>

				<h1><a href="http://getbuildmate.com">Buildmate - Website</a></h1>
			</header>
			
			<section>
				<p>
					Website design and build for Buildmate Software Ltd. Included custom development of a Blog and Knowledge Base application.
				</p>

			    <dl>
			        <dt>Role</dt>
			            <dd>Developer/Designer</dd>
			        <dt>Technology</dt>
			            <dd>ASP.NET C# MVC, SQL Server, Photoshop, HTML5 &amp; CSS3</dd>
			    </dl>
			</section>
		</article>


		<article>
			<header>
				<a href="https://buildmateapp.com" class="view"><span data-hover="Launch the Website"><img src="http://images.functionfirst.co.uk/buildmate.jpg" alt="Buildmate - Application" /></span></a>

				<h1><a href="https://buildmateapp.com">Buildmate - Application</a></h1>
			</header>
			
			<section>
				<p>
					A web-based application that enables building companies and tradesmen to create estimates and tender documents.
				</p>

			    <dl>
			        <dt>Role</dt>
			            <dd>Developer/Designer</dd>
			        <dt>Technology</dt>
			            <dd>ASP.NET VB Web Forms, Telerik .NET AJAX Controls, SQL Server, Photoshop, HTML5 &amp; CSS3</dd>
			    </dl>
			</section>
		</article>
		
		<article>
			<header>
				<a href="/buildmate-mobile" class="view"><span data-hover="View the mock-up"><img src="http://images.functionfirst.co.uk/build_mobile.jpg" alt="Thumbnail for the Buildmate mobile application" /></span></a>

				<h1><a href="/buildmate-mobile">Buildmate - Mobile</a></h1>
			</header>

			<section>
				<p>
				    Initial stage dashboard mock-up for the Buildmate iPhone application, built using Photoshop.
				</p>

				<dl>
				  <dt>Role</dt>
				      <dd>Designer</dd>
				  <dt>Technology</dt>
				      <dd>Photoshop</dd>
				</dl>
			</section>
		</article>

		<article>
			<header>
				<a href="http://www.youtube.com/watch?v=GVw8rwqRx5o" class="view"><span data-hover="Watch the demo (YouTube)"><img src="http://images.functionfirst.co.uk/infocapture.jpg" alt="The inside track on the Claromentis 7.0 redesign" /></span></a>

				<h1><a href="http://www.youtube.com/watch?v=GVw8rwqRx5o">Claromentis - Infocapture</a></h1>
			</header>

			<section>
				<p>
					Video of a drag and drop form building tool. This is an early stage proof of concept that didn't make it to release.
				</p>

			    <dl>
			        <dt>Role</dt>
			            <dd>Designer/Developer</dd>
			        <dt>Technology</dt>
			            <dd>HTML5, CSS3 and jQuery</dd>
			    </dl>
			</section>
		</article>

		<article>
			<header>
				<a href="/claromentis/" class="view"><span data-hover="Read more..."><img src="http://images.functionfirst.co.uk/claro7.jpg" alt="The inside track on the Claromentis 7.0 redesign" /></span></a>

				<h1><a href="/claromentis/">Claromentis 7.0</a></h1>
			</header>

			<section>
				<p>
					Migrated the entire Claromentis framework from an out-dated table layout to modern, standards compliant HTML5.
				</p>

			    <dl>
			        <dt>Role</dt>
			            <dd>Designer/Developer</dd>
			        <dt>Technology</dt>
			            <dd>HTML5 Boilerplate, CSS3, Bootstrap, Modernizr, Responsive layout</dd>
			    </dl>
			</section>
		</article>
		<article>
			<header>
				<a href="/carioca-digital" class="view"><span data-hover="View the Logo"><img src="http://images.functionfirst.co.uk/carioca_thumb.jpg" alt="Thumbnail for the Carioca Digital logo" /></span></a>

				<h1><a href="/carioca-digital">Carioca Digital - Logo</a></h1>
			</header>

			<section>
				<p>
					Logo design for a start-up technology company in Rio de Janeiro  
				</p>

			    <dl>
			        <dt>Role</dt>
			            <dd>Designer</dd>
			        <dt>Technology</dt>
			            <dd>Photoshop</dd>
			    </dl>
			</section>
		</article>

		<article>
			<header>
				<a href="http://http://prototypes.claromentis.com/timesheets/" class="view"><span data-hover="Launch the Prototype"><img src="http://images.functionfirst.co.uk/timesheets.jpg" alt="Timesheets prototype" /></span></a>

				<h1><a href="http://http://prototypes.claromentis.com/timesheets/">Timesheets - Prototype</a></h1>
			</header>
			
			<section>
				<p>
				    Low-fidelity prototype for a Timesheet module based on the Claromentis framework. Built using Axure.
				</p>

				<dl>
				  <dt>Role</dt>
				      <dd>Designer/UI</dd>
				  <dt>Technology</dt>
				      <dd>Axure</dd>
				</dl>
			</section>
		</article>

		<article>
			<header>
				<a href="prototypes/planet_explore_mobile/" class="view"><span data-hover="Launch the Prototype"><img src="http://images.functionfirst.co.uk/planet_explore.jpg" alt="Planet Explore mobile prototype" /></span></a>

				<h1><a href="http://prototypes.claromentis.com/planet_explore_mobile/">Planet Explore - Prototype</a></h1>
			</header>
			
			<section>
				<p>
				    Low-fidelity prototype for the <a href="http://www.planetexplore.com">Planet Explore</a> mobile interface. Built using Axure.
				</p>

				<dl>
				  <dt>Role</dt>
				      <dd>Designer/UI</dd>
				  <dt>Technology</dt>
				      <dd>Axure</dd>
				</dl>
			</section>
		</article><!-- 
		
		<article>
			<header>
				<a href="/forward-technology" class="view"><span data-hover="View the Wireframe"><img src="http://images.functionfirst.co.uk/forward.jpg" alt="Thumbnail for a Learning &amp; Development portal" /></span></a>
				
				<h1><a href="/forward-technology">Forward Technology - Wireframe</a></h1>
			</header>

			<section>

				<p>
				    An initial wire-frame for a potential Learning &amp; Development portal at Forward.
				</p>

				<dl>
					<dt>Role</dt>
						<dd>Designer/UI</dd>
					<dt>Technology</dt>
						<dd>Adobe Fireworks</dd>
				</dl>
			</section>
		</article> -->
	</section>

<?php require "includes/footer.php"; ?>