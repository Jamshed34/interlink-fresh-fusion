import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Truck,
  Package,
  Users
} from "lucide-react";

const Contact = () => {
  console.log("Contact component is loading...");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    inquiryType: "general"
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      inquiryType: "general"
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "07734717334",
      subtitle: "Available during business hours"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@interlinkventures.co.uk",
      subtitle: "We typically respond within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "24 Shepherd Cross Street, Bolton BL13BS",
      subtitle: "United Kingdom"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Monday - Friday: 6:00 AM - 6:00 PM",
      subtitle: "Saturday: 6:00 AM - 2:00 PM"
    }
  ];

  const inquiryTypes = [
    {
      icon: <Package className="w-5 h-5" />,
      title: "Product Inquiry",
      description: "Questions about our produce range and availability"
    },
    {
      icon: <Truck className="w-5 h-5" />,
      title: "Supply Chain Services",
      description: "Import/export and logistics solutions"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "New Partnership",
      description: "Becoming a supplier or distribution partner"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "General Inquiry",
      description: "Other questions or support requests"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to partner with us? Get in touch to discuss your fresh produce needs, 
            supply chain requirements, or to learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Type of Inquiry</Label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full p-3 border border-input rounded-md bg-background"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="products">Product Information</option>
                      <option value="services">Supply Chain Services</option>
                      <option value="partnership">New Partnership</option>
                      <option value="pricing">Pricing & Quotes</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Please provide details about your inquiry, including specific products, quantities, or services you're interested in..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    <Send className="mr-2 w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg text-primary flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{info.title}</h4>
                        <p className="text-foreground">{info.details}</p>
                        <p className="text-muted-foreground text-xs">{info.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Inquiry Types */}
            <Card>
              <CardHeader>
                <CardTitle>What Can We Help With?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inquiryTypes.map((type, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-primary flex-shrink-0 mt-1">
                        {type.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{type.title}</h4>
                        <p className="text-muted-foreground text-xs">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Need Immediate Assistance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90 text-sm mb-4">
                  For urgent orders or time-sensitive inquiries, call us directly.
                </p>
                <Button variant="secondary" size="lg" className="w-full">
                  <Phone className="mr-2 w-4 h-4" />
                  Call 07734717334
                </Button>
              </CardContent>
            </Card>

            {/* Location Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary p-6 rounded-lg text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="font-semibold">Bolton, UK</p>
                  <p className="text-muted-foreground text-sm">
                    24 Shepherd Cross Street<br />
                    Bolton BL13BS<br />
                    United Kingdom
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;