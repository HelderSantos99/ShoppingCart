export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;

  constructor(id = 0, name = '', description = '', price = 0, imgUrl = 'https://images.tcdn.com.br/img/img_prod/733735/iphone_xr_64_gb_product_red_seminovo_desbloqueado_tela_6_1_apple_121_1_20191109161736.jpg') {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imgUrl = imgUrl;
  }
}

