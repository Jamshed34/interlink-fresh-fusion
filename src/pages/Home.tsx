import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Truck, 
  Award, 
  Users, 
  Leaf, 
  Clock, 
  Shield,
  ArrowRight,
  Phone
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import produceGrid from "@/assets/produce-grid.jpg";
import sliderWarehouse from "@/assets/slider-warehouse.jpg";
import sliderMarket from "@/assets/slider-market.jpg";
import sliderRestaurant from "@/assets/slider-restaurant.jpg";

const Home = () => {
  const sliderData = [
    {
      id: 1,
      image: sliderWarehouse,
      title: "Fresh Produce",
      subtitle: "Wholesale Specialists",
      description: "Excellence in supplying fresh, high-quality produce across the UK. Your trusted partner for imports, exports, and supply chain management."
    },
    {
      id: 2,
      image: sliderMarket,
      title: "Global Sourcing",
      subtitle: "Worldwide Network",
      description: "Our extensive network of trusted suppliers spans multiple continents, ensuring year-round availability of premium produce at competitive prices."
    },
    {
      id: 3,
      image: sliderRestaurant,
      title: "Industry Partnerships",
      subtitle: "Business Solutions",
      description: "Serving restaurants, retailers, and food processors with dedicated account management and customized supply chain solutions."
    }
  ];

  const features = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Fresh Quality Produce",
      description: "Premium fresh fruits and vegetables sourced from trusted growers worldwide"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Reliable Supply Chain",
      description: "Efficient logistics and distribution across the UK with on-time delivery"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Excellence",
      description: "Proven track record serving food industry businesses with exceptional service"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Business Partnership",
      description: "Dedicated account management for restaurants, retailers, and food processors"
    }
  ];

  const stats = [
    { number: "500+", label: "Business Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
    { number: "100%", label: "Quality Guarantee" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <HeroSlider slides={sliderData} />

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Interlink Ventures?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to exceptional customer service, competitive pricing, 
              and sourcing exactly what our clients need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Supply Chain Solutions
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Quality Assurance</h4>
                    <p className="text-muted-foreground text-sm">Rigorous quality controls ensure only the finest produce reaches your business</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Timely Delivery</h4>
                    <p className="text-muted-foreground text-sm">Reliable logistics network ensuring fresh produce arrives when you need it</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Expert Support</h4>
                    <p className="text-muted-foreground text-sm">Dedicated account managers who understand your business needs</p>
                  </div>
                </div>
              </div>
              <Link to="/services">
                <Button className="text-lg px-6 py-3">
                  Explore Services <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={produceGrid} 
                alt="Fresh produce variety" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses across the UK who trust Interlink Ventures 
            for their fresh produce needs. Contact us today for competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-4">
                Request Quote
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              <Phone className="mr-2 w-4 h-4" />
              Call 07734717334
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;