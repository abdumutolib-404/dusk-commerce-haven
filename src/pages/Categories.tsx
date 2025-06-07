
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
      count: "2,500+ items",
      description: "Latest gadgets and electronic devices"
    },
    {
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      count: "1,800+ items",
      description: "Trendy clothing and accessories"
    },
    {
      name: "Home & Garden",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      count: "3,200+ items",
      description: "Everything for your home and garden"
    },
    {
      name: "Sports",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      count: "950+ items",
      description: "Sports equipment and fitness gear"
    },
    {
      name: "Books",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      count: "1,200+ items",
      description: "Books, magazines, and educational materials"
    },
    {
      name: "Health & Beauty",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
      count: "800+ items",
      description: "Personal care and beauty products"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Shop by Category</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover our wide range of product categories, each carefully curated to bring you the best selection at great prices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/products?category=${category.name.toLowerCase()}`}
            className="group product-card overflow-hidden hover-scale"
          >
            <div className="relative h-48 mb-4">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-muted-foreground mb-3">{category.description}</p>
              <p className="text-sm font-medium text-primary">{category.count}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
