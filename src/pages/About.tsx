import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Truck, 
  Leaf,
  MapPin,
  Calendar
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every aspect of our operations, from sourcing to delivery."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Focus",
      description: "Our clients' success is our priority. We build lasting partnerships through exceptional service."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainability",
      description: "Committed to environmentally responsible practices and supporting sustainable agriculture."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Reliability",
      description: "Dependable supply chains and consistent delivery performance you can count on."
    }
  ];

  const milestones = [
    { year: "2008", event: "Company Founded", description: "Started as a local produce distributor" },
    { year: "2012", event: "Import/Export Division", description: "Expanded into international trade" },
    { year: "2016", event: "Supply Chain Management", description: "Launched comprehensive logistics services" },
    { year: "2020", event: "Digital Transformation", description: "Modernized operations with technology" },
    { year: "2024", event: "500+ Business Partners", description: "Serving food industry across the UK" }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Interlink Ventures</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Established wholesale specialists committed to excellence in supplying fresh, 
            high-quality produce across the UK with exceptional customer service and competitive pricing.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Interlink Ventures Ltd was founded with a simple mission: to bridge the gap between 
                quality produce suppliers and businesses that depend on fresh, reliable ingredients 
                for their success.
              </p>
              <p>
                Starting as a local distributor, we've grown into a comprehensive supply chain 
                management company specializing in vegetable and fruit wholesale, imports, and exports. 
                Our commitment to understanding our clients' unique needs has made us the preferred 
                supplier for a wide range of businesses across the food industry.
              </p>
              <p>
                Today, we serve restaurants, retailers, food processors, and catering companies 
                throughout the UK, maintaining our founding principles of quality, reliability, 
                and exceptional customer service.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide exceptional supply chain solutions and fresh produce services 
                  that enable our clients to focus on what they do best while we ensure 
                  their ingredient needs are met with reliability and quality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-primary" />
                  <span>Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the UK's most trusted partner in fresh produce wholesale and supply 
                  chain management, known for innovation, sustainability, and unwavering 
                  commitment to client success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Company Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Company Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Badge variant="secondary" className="px-3 py-1 text-sm font-semibold">
                      {milestone.year}
                    </Badge>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg mb-1">{milestone.event}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="bg-secondary p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-8 text-center">Company Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Location</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  24 Shepherd Cross Street<br />
                  Bolton BL13BS<br />
                  United Kingdom
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Established</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Founded in 2008<br />
                  15+ years of experience<br />
                  Proven track record
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Business Type</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Limited Company<br />
                  Wholesale & Distribution<br />
                  Import/Export Operations
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;