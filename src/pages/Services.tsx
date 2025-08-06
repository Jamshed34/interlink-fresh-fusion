import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, 
  Truck, 
  Globe, 
  Package, 
  Clock, 
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Leaf
} from "lucide-react";
import supplyChainImage from "@/assets/supply-chain.jpg";

const Services = () => {
  console.log("Services component is loading...");
  const mainServices = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Wholesale Fresh Produce",
      description: "Premium quality fruits and vegetables sourced from trusted growers worldwide",
      features: [
        "Daily fresh deliveries",
        "Seasonal produce planning",
        "Bulk order discounts",
        "Quality guarantee"
      ],
      badge: "Core Service"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Import & Export",
      description: "International trade solutions connecting you to global produce markets",
      features: [
        "Customs clearance",
        "Documentation handling",
        "International logistics",
        "Compliance management"
      ],
      badge: "Global Reach"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Supply Chain Management",
      description: "End-to-end logistics solutions optimized for fresh produce distribution",
      features: [
        "Route optimization",
        "Temperature control",
        "Real-time tracking",
        "Inventory management"
      ],
      badge: "Specialist"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Prepared Produce",
      description: "Pre-processed fruits and vegetables ready for food industry applications",
      features: [
        "Custom preparation",
        "Portion control",
        "Extended shelf life",
        "Food safety certified"
      ],
      badge: "Value Added"
    }
  ];

  const industries = [
    {
      title: "Restaurants & Cafes",
      description: "Daily fresh deliveries tailored to menu requirements",
      icon: "🍽️"
    },
    {
      title: "Retail Chains",
      description: "Large-scale distribution with consistent quality standards",
      icon: "🏪"
    },
    {
      title: "Food Processors",
      description: "Bulk ingredients for manufacturing and processing",
      icon: "🏭"
    },
    {
      title: "Catering Companies",
      description: "Flexible supply solutions for events and institutions",
      icon: "🎉"
    },
    {
      title: "Hotels & Hospitality",
      description: "Premium produce for hospitality industry standards",
      icon: "🏨"
    },
    {
      title: "Educational Institutions",
      description: "Nutritious produce for schools and universities",
      icon: "🎓"
    }
  ];

  const serviceFeatures = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service for urgent requirements"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorous quality controls and food safety standards"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Account Management",
      description: "Personal service from experienced account managers"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainable Sourcing",
      description: "Environmentally responsible supply chain practices"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive supply chain solutions designed to meet the diverse needs of 
            businesses across the UK food industry.
          </p>
        </div>

        {/* Main Services */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {service.badge}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Features */}
        <section className="mb-20 bg-secondary p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
              <p className="text-muted-foreground mb-8">
                Our diverse client base spans across the entire food industry, from small 
                independent restaurants to large retail chains and food processing facilities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{industry.icon}</span>
                      <div>
                        <h4 className="font-semibold text-sm">{industry.title}</h4>
                        <p className="text-xs text-muted-foreground">{industry.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <img 
                src={supplyChainImage} 
                alt="Supply chain operations" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Consultation</h3>
              <p className="text-muted-foreground text-sm">
                We assess your specific requirements and business needs
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Sourcing</h3>
              <p className="text-muted-foreground text-sm">
                We source the highest quality produce from trusted suppliers
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Logistics</h3>
              <p className="text-muted-foreground text-sm">
                Efficient delivery and distribution through our network
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Support</h3>
              <p className="text-muted-foreground text-sm">
                Ongoing account management and customer support
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary text-primary-foreground p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let us help streamline your supply chain and provide the fresh produce 
            solutions your business needs to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Request Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Products
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;