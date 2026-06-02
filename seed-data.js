var seedProducts = [
  { name: "Ti Amo", brand: "Manila", category: "نسائي", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 180},{size: "50ml", price: 120}], status: "bestseller", description: "عطر تي أمو - إدمان الصبايا، رائحة جذابة وساحرة" },
  { name: "360 Gold", brand: "Perry Ellis", category: "نسائي", image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 200},{size: "50ml", price: 140}], status: "bestseller", description: "عطر 360 جولد من بيري إيليس - فخامة ذهبية" },
  { name: "Musk Delina", brand: "Parfums de Marly", category: "نسائي", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop", sizes: [{size: "75ml", price: 350},{size: "125ml", price: 450}], status: "special", description: "مسك ديلينا - من أرقى العطور الفرنسية" },
  { name: "Oro", brand: "Manila", category: "نسائي", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 220}], status: "new", description: "عطر أورو - ذهبي فاخر بلمسة شرقية" },
  { name: "Majesty", brand: "Manila", category: "نسائي", image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 200},{size: "50ml", price: 130}], status: "bestseller", description: "ماجستي - عطر ملكي بامتياز" },
  { name: "Sauvage", brand: "Dior", category: "رجالي", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 280},{size: "60ml", price: 200}], status: "bestseller", description: "سوفاج من ديور - الأكثر مبيعاً عالمياً للرجال" },
  { name: "Bleu de Chanel", brand: "Chanel", category: "رجالي", image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 320},{size: "50ml", price: 220}], status: "special", description: "بلو دي شانيل - أناقة فرنسية خالصة" },
  { name: "Acqua di Gio", brand: "Giorgio Armani", category: "رجالي", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 250},{size: "75ml", price: 190}], status: "", description: "أكوا دي جيو - انتعاش البحر المتوسط" },
  { name: "Good Girl", brand: "Carolina Herrera", category: "نسائي", image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop", sizes: [{size: "80ml", price: 280},{size: "50ml", price: 200}], status: "bestseller", description: "قود قيرل - جرأة وأنوثة في عبوة واحدة" },
  { name: "Libre", brand: "YSL", category: "نسائي", image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop", sizes: [{size: "90ml", price: 300},{size: "50ml", price: 210}], status: "new", description: "ليبريه من إيف سان لوران - حرية وجرأة" },
  { name: "Burberry Her", brand: "Burberry", category: "نسائي", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 240},{size: "50ml", price: 170}], status: "", description: "بربري هير - أنوثة لندنية عصرية" },
  { name: "Versace Eros", brand: "Versace", category: "رجالي", image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 230},{size: "50ml", price: 160}], status: "", description: "فيرساتشي إيروس - قوة وجاذبية" },
  { name: "La Vie Est Belle", brand: "Lancome", category: "نسائي", image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 270},{size: "75ml", price: 200}], status: "bestseller", description: "لا في إي بيل - الحياة جميلة" },
  { name: "Oud Wood", brand: "Tom Ford", category: "يونيسكس", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 450},{size: "50ml", price: 300}], status: "special", description: "عود وود توم فورد - فخامة العود الغربي" },
  { name: "Black Opium", brand: "YSL", category: "نسائي", image: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=400&h=400&fit=crop", sizes: [{size: "90ml", price: 280},{size: "50ml", price: 190}], status: "", description: "بلاك أوبيوم - إدمان القهوة والفانيلا" },
  { name: "Aventus", brand: "Creed", category: "رجالي", image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 500},{size: "50ml", price: 320}], status: "special", description: "أفينتوس كريد - عطر النجاح والثروة" },
  { name: "Miss Dior", brand: "Dior", category: "نسائي", image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 290},{size: "50ml", price: 200}], status: "new", description: "ميس ديور - رومانسية الورد الباريسي" },
  { name: "Invictus", brand: "Paco Rabanne", category: "رجالي", image: "https://images.unsplash.com/photo-1578996953841-b187dbe4bc8a?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 220},{size: "50ml", price: 150}], status: "", description: "إنفيكتوس - عطر البطل المنتصر" },
  { name: "Baccarat Rouge 540", brand: "Maison FK", category: "يونيسكس", image: "https://images.unsplash.com/photo-1610461888750-10bfc601b874?w=400&h=400&fit=crop", sizes: [{size: "70ml", price: 550},{size: "35ml", price: 350}], status: "special", description: "باكارا روج 540 - تحفة فنية عطرية" },
  { name: "Chance", brand: "Chanel", category: "نسائي", image: "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 300},{size: "50ml", price: 210}], status: "", description: "شانس شانيل - عطر الحظ والأنوثة" },
  { name: "Mercedes Benz", brand: "Mercedes", category: "رجالي", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop", sizes: [{size: "120ml", price: 180},{size: "75ml", price: 130}], status: "", description: "مرسيدس بنز - أناقة السيارة في عطر" },
  { name: "Narciso Rodriguez", brand: "Narciso", category: "نسائي", image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=400&h=400&fit=crop", sizes: [{size: "90ml", price: 260},{size: "50ml", price: 180}], status: "new", description: "نارسيسو رودريغز - مسك ناعم وحسي" },
  { name: "1 Million", brand: "Paco Rabanne", category: "رجالي", image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 230},{size: "50ml", price: 160}], status: "bestseller", description: "ون مليون - ذهب وإغراء" },
  { name: "Bombshell", brand: "Victoria Secret", category: "نسائي", image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 180},{size: "50ml", price: 120}], status: "", description: "بومبشيل - انفجار الأنوثة" },
  { name: "Interlude", brand: "Amouage", category: "رجالي", image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop", sizes: [{size: "100ml", price: 400},{size: "50ml", price: 270}], status: "special", description: "إنترلود أموج - عطر شرقي فاخر" }
];

function seedFirestoreData(deleteExisting) {
    var db = firebase.firestore();
    var batch = db.batch();
    var projectRef = db.collection('projects').doc('manila');

    function doSeed() {
        seedProducts.forEach(function(product, index) {
            var docRef = projectRef.collection('products').doc('product_' + (index + 1));
            batch.set(docRef, product);
        });
        return batch.commit().then(function() {
            console.log('Seeded ' + seedProducts.length + ' products!');
            return seedProducts.length;
        });
    }

    if (deleteExisting) {
        return projectRef.collection('products').get().then(function(snapshot) {
            var deleteBatch = db.batch();
            snapshot.docs.forEach(function(doc) { deleteBatch.delete(doc.ref); });
            return deleteBatch.commit();
        }).then(doSeed);
    }
    return doSeed();
}