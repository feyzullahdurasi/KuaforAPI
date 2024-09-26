# Node.js görüntüsünü temel al
FROM node:14

# Çalışma dizinini ayarla
WORKDIR /usr/src/app

# Paket dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Uygulamayı başlat
CMD ["node", "index.js"]
