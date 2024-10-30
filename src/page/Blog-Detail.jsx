import React from 'react';
import makan from '../assets/image/makan-blog.jpg'
import cryspi from '../assets/image/Crispy-Sandwich.png'

const BlogDetail = () => {
  return (
    <div className='py-15 p-5  sm:p-28 bg-gradient-to-tr from-white to-[rgba(249,225,191,0.85)] flex flex-col md:flex-row gap-6 md:gap-10 min-h-max'>

       {/* Bagian Konten Utama */}
       <div className='w-full md:w-3/4 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl p-4 md:p-8 min-h-max'>
        <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Deflasi Beruntun: Daya Beli Turun, Pola Belanja Juga Berubah</h2>
        <p className='mb-5'>30 Oktober 2024</p>
        <div className='w-full mb-4'>
          <img className='object-cover h-60 w-full rounded-lg' src={makan} alt="Gambar makanan" />
        </div>

        <div className='text-lg leading-relaxed space-y-4 text-justify'>
          <p>
            Dalam beberapa bulan terakhir, Indonesia mengalami fenomena deflasi beruntun yang menunjukkan penurunan harga secara umum. Meski mungkin terdengar positif, deflasi ini sebenarnya mencerminkan lemahnya daya beli masyarakat, yang kian terasa dalam sektor-sektor seperti pangan, terutama pada pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) di bidang kuliner.
          </p>
          <p>
            Penurunan daya beli membuat banyak masyarakat lebih selektif dalam berbelanja. Banyak orang kini lebih berhati-hati dalam mengatur pengeluaran dan memilih untuk hanya membeli kebutuhan pokok yang benar-benar diperlukan. Akibatnya, produk makanan yang sebelumnya banyak dikonsumsi kini sering kali tidak terjual habis, bahkan mengalami penurunan permintaan secara drastis. UMKM di sektor makanan dan minuman pun merasakan dampak langsung dari perubahan pola belanja ini, dengan semakin banyak produk yang tersisa atau bahkan terbuang.
          </p>
          <p>
            Beberapa pelaku UMKM mengakui bahwa penurunan penjualan sudah mulai terasa sejak harga-harga kebutuhan pokok melonjak tahun lalu. Namun, kini dengan deflasi yang terjadi, daya beli yang terus melemah semakin memperburuk kondisi bisnis mereka. Produk-produk yang biasanya laris manis, seperti makanan ringan dan jajanan khas daerah, kini sering tidak habis terjual. Para pengusaha kecil harus menghadapi tantangan baru, dari pengelolaan stok hingga upaya mempertahankan bisnis di tengah minat beli yang terus menurun.
          </p>
          <p>
            Deflasi yang berkelanjutan ini menunjukkan adanya perubahan pola konsumsi, di mana masyarakat lebih banyak menahan diri dalam berbelanja. Para ahli ekonomi memperingatkan bahwa jika deflasi ini terus berlangsung tanpa peningkatan daya beli, bisa berdampak buruk bagi pertumbuhan ekonomi secara keseluruhan. Adanya kebijakan yang tepat untuk meningkatkan daya beli masyarakat sangat diperlukan, terutama bagi sektor UMKM yang menjadi tulang punggung perekonomian nasional.
          </p>
        </div>
      </div>

      {/* Bagian Sidebar Berita Terkait */}
      <div className='w-full md:w-1/4 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-xl p-4 md:p-8'>
        <h3 className="text-lg font-medium mb-4">Berita Terkait</h3>
        
       {/* berita 1 */}
      <div className='flex gap-3 mt-4 group'>
        <div className="overflow-hidden rounded-lg w-1/2 h-15">
          <img className='object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110' src={makan} alt="Gambar makanan" />
        </div>
        <p className='w-full font-semibold text-md lg:text-md transition-colors duration-300 group-hover:text-orange-400'>Banyak Kecelakaan terjadi di sektor makanan</p> 
      </div>

      {/* berita 2 */}
      <div className='flex gap-3 mt-4 group'>
        <div className="overflow-hidden rounded-lg w-1/2 h-15">
          <img className='object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110' src={cryspi} alt="Gambar makanan" />
        </div>
        <p className='w-full font-semibold text-md lg:text-md transition-colors duration-300 group-hover:text-orange-400'>Perubahan pola konsumsi berpengaruh pada produksi makanan</p> 
      </div>

      {/* berita 3 */}
      <div className='flex gap-3 mt-4 group'>
        <div className="overflow-hidden rounded-lg w-1/2 h-15">
          <img className='object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110' src={makan} alt="Gambar makanan" />
        </div>
        <p className='w-full font-semibold text-md lg:text-md transition-colors duration-300 group-hover:text-orange-400'>UMKM kuliner mengalami penurunan penjualan drastis</p> 
      </div>
      </div>

    </div>
  );
};

export default BlogDetail;
