from pytube import YouTube

link = input("Digite o link do vídeo que deseja baixar:")
path = input("Digite o diretório que deseja salvar o vídeo:")
yt = YouTube(link)

print("Título: ", yt.title)
print("Views: ", yt.views)
print("Avaliação: ", yt.rating)
print("Duração: ", yt.length, " segundos")

ys = yt.streams.get_highest_resolution()

print("Baixando...")
ys.download(path)
print("Download Completo!")
