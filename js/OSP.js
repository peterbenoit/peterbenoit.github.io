(function () {
	function createRepoWidget({
		username, // GitHub username
		containerId, // ID of the container element
		columns = { mobile: 1, tablet: 2, desktop: 3 },
		cardStyles = {}, // Optional custom styles for the card background and container
		textStyles = {}, // Optional custom styles for text and icon colors
		scaleOnHover = 1.05 // Default scale factor on hover; set to 0 or false to disable
	}) {
		const repoContainer = document.getElementById(containerId);

		const languageColors = {
			JavaScript: '#f1e05a',
			Python: '#3572A5',
			TypeScript: '#2b7489',
			Vue: '#41b883',
			React: '#61DAFB',
			Angular: '#E53238',
			Node: '#339933',
			Express: '#000000',
			Django: '#092E20',
			CSS: '#563d7c',
			HTML: '#e34c26',
			Java: '#b07219',
			C: '#555555',
			'C#': '#178600',
			'C++': '#f34b7d',
			Go: '#00add8',
			Ruby: '#701516',
			PHP: '#4F5D95',
			Swift: '#ffac45',
			Kotlin: '#F18E33',
			Rust: '#dea584',
			SQL: '#e38c00',
			MySQL: '#4479A1',
			PostgreSQL: '#336791',
			MongoDB: '#47A248',
			Docker: '#2496ED',
			GitHub: '#181717',
			Azure: '#0078D4',
			AWS: '#FF9900'
		};

		repoContainer.style.display = 'grid';
		repoContainer.style.gap = '16px';

		const styles = `
			#${containerId} {
				grid-template-columns: repeat(${columns.mobile}, 1fr);
			}
			@media (min-width: 640px) {
				#${containerId} {
					grid-template-columns: repeat(${columns.tablet}, 1fr);
				}
			}
			@media (min-width: 1024px) {
				#${containerId} {
					grid-template-columns: repeat(${columns.desktop}, 1fr);
				}
			}
		`;

		const styleSheet = document.createElement('style');
		styleSheet.innerText = styles;
		document.head.appendChild(styleSheet);

		async function fetchRepos() {
			const response = await fetch(`https://api.github.com/users/${username}/repos`);
			const repos = await response.json();

			repos.forEach(repo => {
				const card = document.createElement('div');
				card.style.cssText = `
					background: #fff;
					box-shadow: 0 4px 8px rgba(0,0,0,0.1);
					border-radius: 8px;
					overflow: hidden;
					transition: transform 0.3s;
				`;

				Object.assign(card.style, cardStyles);

				if (scaleOnHover) {
					card.onmouseover = () => (card.style.transform = `scale(${scaleOnHover})`);
					card.onmouseleave = () => (card.style.transform = 'scale(1)');
				}

				const languageColor = languageColors[repo.language] || '#ccc';

				card.innerHTML = `
					<a href="${
						repo.html_url
					}" target="_blank" style="text-decoration: none; color: inherit; display: block; padding: 16px;">
						<h3 style="font-size: 1.25rem; font-weight: bold; color: ${textStyles.titleColor || '#333'};">${
					repo.name
				}</h3>
						<p style="color: ${textStyles.descriptionColor || '#666'}; margin: 8px 0;">${
					repo.description || 'No description provided'
				}</p>
						<div style="display: flex; align-items: center; color: ${
							textStyles.iconColor || '#888'
						}; font-size: 0.875rem;">
							<span style="display: flex; align-items: center; margin-right: 16px;">
								<span style="width: 10px; height: 10px; background-color: ${languageColor}; border-radius: 50%; margin-right: 4px;"></span>
								${repo.language || 'N/A'}
							</span>
							<span style="display: flex; align-items: center; margin-right: 16px;">
								<svg width="16" height="16" fill="${
									textStyles.iconColor || '#888'
								}" style="margin-right: 4px;"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path></svg>
								${repo.forks_count}
							</span>
							<span style="display: flex; align-items: center;">
								<svg width="16" height="16" fill="${
									textStyles.iconColor || '#888'
								}" style="margin-right: 4px;"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path></svg>
								${repo.stargazers_count}
							</span>
						</div>
						<div style="color: ${textStyles.sizeColor || '#aaa'}; font-size: 0.75rem; margin-top: 8px;">Size: ${
					repo.size
				} KB</div>
					</a>
				`;

				repoContainer.appendChild(card);
			});
		}

		fetchRepos();
	}

	window.createRepoWidget = createRepoWidget;
})();

// Example usage:
// createRepoWidget({
// 	username: 'peterbenoit',
// 	containerId: 'repo-container',
// 	columns: { mobile: 1, tablet: 2, desktop: 3 },
// 	cardStyles: {
// 		backgroundColor: '#2b2b2b',
// 		boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
// 		borderRadius: '10px',
// 		padding: '20px'
// 	},
// 	textStyles: {
// 		titleColor: '#fff',
// 		descriptionColor: '#ccc',
// 		iconColor: '#f0ad4e',
// 		sizeColor: '#bbb'
// 	},
// 	scaleOnHover: 1.1
// });
