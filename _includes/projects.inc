
	<div class="projects row">
		<div class="projects-slider col-xs-offset-3 col-xs-6">
		<ul>
		{% for domain in site.data.code.domains %}
			<li>
			<div class="card">
				<div class="card-image">
	                <img src="{{ domain['image'] }} ">
	               
	            </div>
	             <div class="card-reveal">
						{% for project in domain.projects %}
							<span class="project-header row middle-xs between-xs">		
								<span class="project-title">{{ project['name'] }}</span>
								<span class="project-action col-xs-2 last-xs">
								{% if project.external-link %}
									<a class="nofx" href="{{ project['external-link'] }}"><i class="fa fa-external-link-square"></i></a>
								{% endif %}
								{% if project.github-link %}
									<a class="nofx" href="{{ project['github-link'] }}"><i class="fa fa-github-square"></i></a>
								{% endif %}
								</span>
							</span>
							<p class="project-description">{{ project['description'] }}</p>
						{% endfor %}
					</div>
			</div>
			</li>
		{% endfor %}
		</ul>
		</div>
	</div>