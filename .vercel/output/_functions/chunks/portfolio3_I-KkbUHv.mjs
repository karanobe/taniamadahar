const portfolio1 = new Proxy({"src":"/_astro/portfolio1.CNJgh8VB.jpg","width":800,"height":1248,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/karanoberoi/Documents/Personal/taniamadahar/src/assets/portfolio1.jpg";
							}
							
							return target[name];
						}
					});

const portfolio2 = new Proxy({"src":"/_astro/portfolio2.DbX2IiN8.jpg","width":800,"height":1248,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/karanoberoi/Documents/Personal/taniamadahar/src/assets/portfolio2.jpg";
							}
							
							return target[name];
						}
					});

const portfolio3 = new Proxy({"src":"/_astro/portfolio3.CYmB-r_w.jpg","width":400,"height":624,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/karanoberoi/Documents/Personal/taniamadahar/src/assets/portfolio3.jpg";
							}
							
							return target[name];
						}
					});

export { portfolio2 as a, portfolio3 as b, portfolio1 as p };
