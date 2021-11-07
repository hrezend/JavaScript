from datetime import datetime
import instaloader

# Carrega a lib e faz login com a conta desejada
L = instaloader.Instaloader()
L.login('LOGIN','SENHA')

# Carrega todos os posts do perfil escolhido
posts = instaloader.Profile.from_username(L.context, "pycodebr").get_posts()

# Período desejado (filtro)
SINCE = datetime(2021, 1, 16)
UNTIL = datetime(2021, 1, 18)

# Percorre os posts carregados e baixa aqueles entre o período definido acima
for post in posts:
	if(post.date >= SINCE) and (post.date <= UNTIL):
		print(post.date)
		L.download_post(post, "insta-posts-downloads")
