const customFooterTem = `
<footer id="footer">
	<div id="footer-container" class="container" style="padding-top: 10px;">
		
		<div class="row">
			
			<div class="col-md-4 col-sm-6" style="background-color: #fff; border: 1px solid red; border-radius: 20px; left: 20px; top: 10px; padding-top: 10px; box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);">
				<div class="testimonial bottom">
					<h2>Interfaces de usuario</h2>
					<div class="media">
						<div class="media-body">
							<blockquote>Las interfaces básicas de usuario son aquellas que incluyen cosas como menús, ventanas, teclado, ratón, y algunos otros sonidos que la computadora hace, en general, todos aquellos canales por los cuales se permite la comunicación entre el hombre y la computadora.</blockquote>
							<h3><a target="_blank" href="http://hcibib.org/tcuid/">- Lewis y Rieman (1993)</a></h3>
						</div>
					</div>
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




