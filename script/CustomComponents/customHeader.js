const rootPath001 = "./";
const rootPath002 = "../";
const rootPath003 = "../../";


function createSocial() {
	var socialElement = `
	<div class='container'> 
		<div class='row'> 
			<div class='col-sm-12 overflow'> 
				<div class='social-icons pull-right'> 
					<ul class='nav nav-pills'> 
						<li><a href=''><i class='fa fa-facebook'></i></a></li> 
						<li><a href=''><i class='fa fa-twitter'></i></a></li> 
						<li><a href=''><i class='fa fa-google-plus'></i></a></li> 
						<li><a href=''><i class='fa fa-dribbble'></i></a></li> 
						<li><a href=''><i class='fa fa-linkedin'></i></a></li> 
					</ul> 
				</div> 
			</div> 
		</div> 
	</div> <!-- div#ray-title.container -->
	`;

	return socialElement;
}

function createNavbar(rootIndex) {
	var rootPathAux = rootPath001;

	if (rootIndex == 1 || rootIndex == 20) {
		rootPathAux = rootPath002;
	} else if (rootIndex == 2) {
		rootPathAux = rootPath003;
	}	


	var customNavbarTem = `
	<div id="cifp_navbar" class="navbar navbar-inverse" role="banner">
		<div class="container">

			<div class="navbar-header">
				<!-- Menú tipo botón expandible para la versión móvil -->
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<!-- Logo y enlace a la página de inicio -->
				<a class="navbar-brand" href="${rootPathAux}index.html">
					<h1><img id="CIFP-LOGO" src="${rootPathAux}resources/image/logo.png" alt="logo"></h1>
				</a>
			</div>

			<!-- Barra de navegación -->
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav navbar-right">
					<li class="active"><a href="${rootPathAux}index.html">Inicio</a></li>

					<li class="dropdown"><a href="${rootPathAux}pages/teoria.html">Teoría <i class="fa fa-angle-down"></i></a>
						<ul role="menu" class="sub-menu">
							<!--<li><a href="${rootPathAux}pages/teoria/tema001.html">Tema 1</a></li>-->
							<li><a href="${rootPathAux}pages/proximamente.html">Tema 1</a></li>
						</ul>
					</li>

					<li class="dropdown"><a href="${rootPathAux}pages/practicas.html">Prácticas <i class="fa fa-angle-down"></i></a>
						<ul role="menu" class="sub-menu">
							<li><a href="${rootPathAux}pages/ejercicios/ejercicio001.html">Ejercicios 1</a></li>
							<li><a href="${rootPathAux}pages/ejercicios/ejercicio002.html">Ejercicios 2</a></li>
						</ul>
					</li>

					<!--<li class="dropdown"><a href="${rootPathAux}pages/portfolio.html">Portfolio <i class="fa fa-angle-down"></i></a>
						<ul role="menu" class="sub-menu">
							<li><a href="${rootPathAux}pages/portfolio/galeria.html">Galeria</a></li>
							<li><a href="${rootPathAux}pages/portfolio/cv.html ">Curriculum Vitae</a></li>
						</ul>
					</li>-->

					<li class="dropdown"><a href="${rootPathAux}pages/recursos.html">Recursos <i class="fa fa-angle-down"></i></a>
						<ul role="menu" class="sub-menu">
							<li><a href="${rootPathAux}pages/recursos/cheetsheet.html ">Plantilla Triangle</a></li>
							
							<!--<li><a href="${rootPathAux}pages/recursos/rec-html.html ">HMTL 5</a></li>-->
							<li><a href="${rootPathAux}pages/proximamente.html">HMTL 5</a></li>

							<!--<li><a href="${rootPathAux}pages/recursos/rec-css.html ">CSS 3</a></li>-->
							<li><a href="${rootPathAux}pages/proximamente.html ">CSS 3</a></li>

							<!--<li><a href="${rootPathAux}pages/recursos/rec-bootstrap.html ">BootStrap</a></li>-->
							<li><a href="${rootPathAux}pages/proximamente.html">BootStrap</a></li>

							<li><a href="${rootPathAux}pages/recursos/rec-javascript.html ">JavaScript</a></li>

							<!--<li><a href="${rootPathAux}pages/recursos/rec-threejs.html ">Three.js</a></li>-->
							<li><a href="${rootPathAux}pages/proximamente.html">Three.js</a></li>
						</ul>
					</li>
				</ul>
			</div>
			<div class="search">
				<form role="form">
					<i class="fa fa-search"></i>
					<div class="field-toggle">
						<input type="text" class="search-form" autocomplete="off" placeholder="Search">
					</div>
				</form>
			</div>
		</div>
	</div> <!-- div#ray-navbar.navbar.navbar-inverse -->
	`;

	return customNavbarTem;
}





//=======================================================

function LoadCustomHeader (rootIndex) {
	var customHeaderTem = `
	<header id="header">
		${createSocial()}
		${createNavbar(rootIndex)}
	</header>
	`;

	$( "#custom-header" ).append(customHeaderTem);
}





