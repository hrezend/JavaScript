import speedtest

test = speedtest.speedtest()

# testa Download e converte em mb/s
down = test.download()
rsDown = round(down)
fDown = int(rsDown / 1e+6)

# testa Upload e converte em mb/s
upload = test.upload()
rsUp = round(upload)
fUp = int(rsUp / 1e+6)

print(f"Sua velocidade de Download é de ? {fDown} mb/s.")
print(f"Sua velocidade de Upload é de ? {fUp} mb/s.")
