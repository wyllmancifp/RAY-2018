const customFooterTem = `
<footer id="footer">
	<div id="footer-container" class="container">
		
		<div class="row">
			
			<div class="col-md-4 col-sm-6">
				<div class="testimonial bottom">
					<h2>Interfaces de usuario</h2>
					<div class="media">
						<div class="pull-left">
							<a href="#"><img src="./resources/image/home/profile1.png" alt=""></a>
						</div>
						<div class="media-body">
							<blockquote>Las interfaces básicas de usuario son aquellas que incluyen cosas como menús, ventanas, teclado, ratón, y algunos otros sonidos que la computadora hace, en general, todos aquellos canales por los cuales se permite la comunicación entre el hombre y la computadora.</blockquote>
							<h3><a target="_blank" href="http://hcibib.org/tcuid/">- Lewis y Rieman (1993)</a></h3>
						</div>
					</div>
					<!--
					<div class="media">
						<div class="pull-left">
							<a href="#"><img src="./resources/image/home/profile2.png" alt=""></a>
						</div>
						<div class="media-body">
							<blockquote>Capicola nisi flank sed minim sunt aliqua rump pancetta leberkas venison eiusmod.</blockquote>
							<h3><a href="">- Abraham Josef</a></h3>
						</div>
					</div> 
					-->
				</div> 
			</div>

			<div class="col-md-3 col-sm-6">
				<div class="contact-info bottom">
					<h2>Contacto</h2>
					<address>
					E-mail: <a href="mailto:someone@example.com">...@....com</a> <br> 
					Teléfono: +.. (...) ... ... <br> 
					Fax: +.. (...) ... ... <br> 
					</address>

					<h2>Dirección</h2>
					<address>
					....., .. .... ....., <br> 
					.... ...., <br> 
					......, ... ... <br> 
					España <br> 
					</address>
				</div>
			</div>


			<div class="col-sm-12">
				<div class="copyright-text text-center">
					<p>CIFP César Manrique 2018.</p>
					<p>Modificación de la plantilla: <a target="_blank" href="">G.R.P.</a></p>
				</div>
			</div>
		</div>
	</div>
</footer>
`;

//=======================================================

function LoadCustomFooter () {
	$( "#custom-footer" ).append(customFooterTem);
}




