# Rehber Uygulaması

Bu basit rehber uygulaması, Node.js ve MySQL kullanılarak oluşturulmuş bir web uygulamasıdır. Uygulama, kullanıcılara kişi bilgilerini girmeleri ve kaydetmeleri için bir arayüz sunar.

## Kullanılan Teknolojiler

Bu projede aşağıdaki teknolojiler kullanılmıştır:

- Node.js
- Express.js (web uygulaması oluşturmak için kullanıldı)
- MySQL (veritabanı)
- EJS (HTML şablon motoru)
- Bootstrap (kullanıcı arayüzü tasarımı için)

## Kurulum

Projeyi çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. Node.js'i bilgisayarınıza yükleyin. [Node.js İndirme Sayfası](https://nodejs.org/)

2. Projeyi bilgisayarınıza klonlayın veya ZIP olarak indirin.

3. Projeyi klonladıktan veya ZIP dosyasını çıkardıktan sonra projenin ana dizinine gidin.

4. Gerekli bağımlılıkları yüklemek için aşağıdaki komutu çalıştırın:

```
npm install
```

5. MySQL veritabanı bağlantı ayarlarınızı `config/database.js` dosyasında güncelleyin:

```
export default {
  host: "localhost",
  user: "root",
  password: "",
  database: "database",
};
```

SQL;
```
CREATE DATABASE IF NOT EXISTS contacts;

USE contacts;

CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  surname VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL
);

```


6. Projeyi başlatmak için aşağıdaki komutu çalıştırın:

```
node app.js
```

7. Tarayıcınızı açın ve http://localhost:3000 adresine giderek uygulamayı görüntüleyin.
