import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Database, BarChart3, Brain, FileSpreadsheet, Code, TrendingUp, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "@/hooks/use-toast";
import profilePhoto from "@/assets/profile-photo.jpg";

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = "7czmJ2yPbx8dLtdU1";
const EMAILJS_SERVICE_ID = "service_a287ov3";
const EMAILJS_TEMPLATE_ID = "template_yrcpl0v";

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Contact Form Schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(200, "Subject must be less than 200 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters")
});
type ContactFormData = z.infer<typeof contactFormSchema>;
const Index = () => {
  // Form setup
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  // Form submission handler
  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
      });
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    }
  };
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-primary">Mohsin Ali</h2>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <Button variant="default" className="bg-accent hover:bg-accent/90">
              Download CV
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen pt-20 pb-20 px-6 overflow-hidden flex items-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
        
        {/* Particle effects */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full animate-pulse" style={{
        animationDelay: '0.5s'
      }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-secondary rounded-full animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block animate-slide-up">
                <Badge className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-6 py-2 text-sm font-medium shadow-lg backdrop-blur-sm border border-accent/20">
                  ✨ Data Analyst & Freelance Consultant
                </Badge>
              </div>
              
              <div className="space-y-4 animate-slide-up" style={{
              animationDelay: '0.1s'
            }}>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight">
                  Hello, I'm
                </h1>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
                    Mohsin Ali
                  </span>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed animate-slide-up" style={{
              animationDelay: '0.2s'
            }}>
                Transforming raw data into <span className="text-primary font-semibold">actionable insights</span> through advanced analytics, visualization, and machine learning.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-6 animate-slide-up" style={{
              animationDelay: '0.3s'
            }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105 px-8"
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Portfolio
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 hover:bg-accent/10 hover:border-accent transition-all hover:scale-105 px-8"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                </Button>
              </div>
              
              <div className="flex gap-3 pt-8 animate-slide-up" style={{
              animationDelay: '0.4s'
            }}>
                <a href="mailto:mohsinalimughal96@gmail.com" className="group p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/10 transition-all hover:scale-110 hover:shadow-lg">
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a href="tel:+353899854920" className="group p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent hover:bg-accent/10 transition-all hover:scale-110 hover:shadow-lg">
                  <Phone className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
                <a href="#" className="group p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-secondary hover:bg-secondary/10 transition-all hover:scale-110 hover:shadow-lg">
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                </a>
                <a href="#" className="group p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary/10 transition-all hover:scale-110 hover:shadow-lg">
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
            
            {/* Right content - Profile Image */}
            <div className="relative animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="relative w-full max-w-lg mx-auto">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-secondary rounded-full opacity-20 blur-3xl animate-pulse"></div>
                
                {/* Main profile circle */}
                <div className="relative aspect-square rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl backdrop-blur-sm">
                  <Avatar className="w-full h-full">
                    <AvatarImage src={profilePhoto} alt="Mohsin Ali" className="object-cover" />
                    <AvatarFallback>MA</AvatarFallback>
                  </Avatar>
                </div>
                
                {/* Stats cards */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-card to-card/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-accent/30 animate-float hover:scale-105 transition-transform">
                  <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">5+</p>
                  <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-card to-card/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-primary/30 animate-float hover:scale-105 transition-transform" style={{
                animationDelay: '1s'
              }}>
                  <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">50+</p>
                  <p className="text-sm text-muted-foreground font-medium">Projects Done</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">About Me</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Designing Solutions, Not Just Visuals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate Data Analyst with a strong academic foundation and hands-on experience in turning complex data into strategic business insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm group animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Projects and Case Studies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Successfully delivered end-to-end data analytics projects including predictive modeling, ETL pipelines, and interactive dashboards.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm group animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <div className="flex items-start gap-4">
                <div className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">6+ Years of Experience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Extensive expertise in data science, analytics, and business intelligence across various domains and technologies.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="max-w-4xl mx-auto animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <Card className="p-10 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm border-2 hover:border-primary/30 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                Education
              </h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform">
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">MSc in Data Analytics</h4>
                    <p className="text-muted-foreground">National College of Ireland • 2025</p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform">
                  <div className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all">
                    <Database className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">BSc in Data Science</h4>
                    <p className="text-muted-foreground">COMSATS University, Pakistan • 2021</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Services</Badge>
            <h2 className="text-4xl font-bold mb-4">Expertise Service! Let's check it out</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive data analytics services tailored to transform your business through data-driven insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Management</h3>
              <p className="text-muted-foreground">
                Expert data cleaning, transformation, validation, and ETL pipeline development for robust data infrastructure.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Visualization</h3>
              <p className="text-primary-foreground/90">
                Create stunning interactive dashboards using Power BI, Tableau, and Python for impactful data storytelling.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Predictive Modeling</h3>
              <p className="text-muted-foreground">
                Advanced machine learning techniques for forecasting, classification, and predictive analytics solutions.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">SQL & Database</h3>
              <p className="text-muted-foreground">
                Proficient in MS SQL Server, PostgreSQL, and MySQL for efficient database querying and management.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <FileSpreadsheet className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Statistical Analysis</h3>
              <p className="text-muted-foreground">
                Comprehensive statistical analysis, hypothesis testing, and data-driven decision making frameworks.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Business Intelligence</h3>
              <p className="text-muted-foreground">
                Transform raw data into actionable business insights with comprehensive BI solutions and reporting.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative py-20 px-6 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">Portfolio</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Projects and Case Studies
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group border-2 hover:border-primary/50 animate-fade-in">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                <BarChart3 className="w-20 h-20 text-primary relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6 bg-gradient-to-br from-card to-card/80">
                <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Power BI</Badge>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Sales Analytics Dashboard</h3>
                <p className="text-muted-foreground">
                  Interactive dashboard visualizing sales, operations, and financial KPIs for data-driven decision making.
                </p>
              </div>
            </Card>
            
            <Link to="/projects/renewable-forecasting" className="block">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group border-2 hover:border-accent/50 animate-fade-in cursor-pointer" style={{
              animationDelay: '0.1s'
            }}>
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                  <Brain className="w-20 h-20 text-accent relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6 bg-gradient-to-br from-card to-card/80">
                  <Badge className="mb-3 bg-accent/10 text-accent border-accent/20">Machine Learning</Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Renewable Energy Prediction</h3>
                  <p className="text-muted-foreground">
                    Predictive model using Random Forest & SVM for renewable energy consumption forecasting.
                  </p>
                </div>
              </Card>
            </Link>
            
            <Link to="/projects/healthflow-etl" className="block">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group border-2 hover:border-secondary/50 animate-fade-in cursor-pointer" style={{
              animationDelay: '0.2s'
            }}>
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                  <Database className="w-20 h-20 text-secondary relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6 bg-gradient-to-br from-card to-card/80">
                  <Badge className="mb-3 bg-secondary/10 text-secondary border-secondary/20">ETL Pipeline</Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">MedAnalytics ETL: End-to-End Health Data Engineering</h3>
                  <p className="text-muted-foreground">
                    Efficient ETL pipeline for diabetes data migration and transformation between NoSQL & SQL databases.
                  </p>
                </div>
              </Card>
            </Link>
            
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group border-2 hover:border-primary/50 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                <TrendingUp className="w-20 h-20 text-primary relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6 bg-gradient-to-br from-card to-card/80">
                <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Power BI </Badge>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Predictive Model Performance</h3>
                <p className="text-muted-foreground">
                  Interactive Power BI reports showcasing machine learning model performance metrics.
                </p>
              </div>
            </Card>
            
            <Link to="/projects/business-intelligence" className="block">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group border-2 hover:border-accent/50 animate-fade-in cursor-pointer" style={{
              animationDelay: '0.4s'
            }}>
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                  <FileSpreadsheet className="w-20 h-20 text-accent relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6 bg-gradient-to-br from-card to-card/80">
                  <Badge className="mb-3 bg-accent/10 text-accent border-accent/20">Big Data</Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Business Intelligence Project</h3>
                  <p className="text-muted-foreground">
                    Comprehensive BI solution analyzing Alibaba data for strategic business insights.
                  </p>
                </div>
              </Card>
            </Link>
            
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group border-2 border-primary/50 hover:border-primary bg-gradient-to-br from-primary/5 to-secondary/5 animate-fade-in" style={{
            animationDelay: '0.5s'
          }}>
              <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="text-center text-primary-foreground relative z-10">
                  <p className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">+</p>
                  <p className="text-lg font-medium">View More</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">More Projects Coming Soon</h3>
                <p className="text-muted-foreground">
                  Continuously working on new and exciting data analytics projects.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30"></div>
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">Skills</Badge>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">Technical Expertise</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-2 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 animate-fade-in">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                Programming & Analytics
              </h3>
              <div className="space-y-6">
                <div className="group">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-lg group-hover:text-primary transition-colors">Python</span>
                    <span className="text-muted-foreground font-mono">95%</span>
                  </div>
                  <div className="h-3 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <div className="h-full bg-gradient-to-r from-primary via-secondary to-primary w-[95%] rounded-full animate-pulse shadow-lg shadow-primary/50"></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-lg group-hover:text-primary transition-colors">SQL</span>
                    <span className="text-muted-foreground font-mono">90%</span>
                  </div>
                  <div className="h-3 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <div className="h-full bg-gradient-to-r from-primary via-secondary to-primary w-[90%] rounded-full animate-pulse shadow-lg shadow-primary/50" style={{
                    animationDelay: '0.5s'
                  }}></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-lg group-hover:text-primary transition-colors">Machine Learning</span>
                    <span className="text-muted-foreground font-mono">85%</span>
                  </div>
                  <div className="h-3 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <div className="h-full bg-gradient-to-r from-primary via-secondary to-primary w-[85%] rounded-full animate-pulse shadow-lg shadow-primary/50" style={{
                    animationDelay: '1s'
                  }}></div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-2 hover:border-accent/30 hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full"></div>
                Visualization & Tools
              </h3>
              <div className="space-y-6">
                <div className="group">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-lg group-hover:text-accent transition-colors">Power BI</span>
                    <span className="text-muted-foreground font-mono">90%</span>
                  </div>
                  <div className="h-3 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <div className="h-full bg-gradient-to-r from-accent via-primary to-accent w-[90%] rounded-full animate-pulse shadow-lg shadow-accent/50"></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-lg group-hover:text-accent transition-colors">Tableau</span>
                    <span className="text-muted-foreground font-mono">85%</span>
                  </div>
                  <div className="h-3 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <div className="h-full bg-gradient-to-r from-accent via-primary to-accent w-[85%] rounded-full animate-pulse shadow-lg shadow-accent/50" style={{
                    animationDelay: '0.5s'
                  }}></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-lg group-hover:text-accent transition-colors">ETL & Data Pipelines</span>
                    <span className="text-muted-foreground font-mono">88%</span>
                  </div>
                  <div className="h-3 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <div className="h-full bg-gradient-to-r from-accent via-primary to-accent w-[88%] rounded-full animate-pulse shadow-lg shadow-accent/50" style={{
                    animationDelay: '1s'
                  }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <Card className="p-10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-2 hover:border-primary/20 hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-primary via-accent to-secondary rounded-full"></div>
              Technologies & Libraries
            </h3>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-6 py-3 text-base hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 cursor-pointer">Pandas</Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 cursor-pointer">NumPy</Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 cursor-pointer">Matplotlib</Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 cursor-pointer">Seaborn</Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-110 cursor-pointer">Scikit-learn</Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 cursor-pointer">MS SQL Server</Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 cursor-pointer">PostgreSQL</Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 cursor-pointer">MySQL</Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 cursor-pointer">MongoDB</Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-110 cursor-pointer">ETL Pipelines</Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-110 cursor-pointer">Data Governance</Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 cursor-pointer">Statistical Analysis</Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">Contact</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to transform your data into actionable insights? Get in touch and let's create something amazing!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-2 hover:border-primary/50 group animate-fade-in">
              <div className="flex items-center gap-5 mb-6">
                <div className="p-5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl group-hover:scale-110 group-hover:shadow-lg transition-all">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">Email</h3>
                  <p className="text-muted-foreground text-sm">mohsinalimughal96@gmail.com</p>
                </div>
              </div>
              <Button variant="outline" className="w-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" asChild>
                <a href="mailto:mohsinalimughal96@gmail.com">Send Email</a>
              </Button>
            </Card>
            
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-2 hover:border-accent/50 group animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <div className="flex items-center gap-5 mb-6">
                <div className="p-5 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl group-hover:scale-110 group-hover:shadow-lg transition-all">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 group-hover:text-accent transition-colors">Phone</h3>
                  <p className="text-muted-foreground text-sm">+353 89 985 4920</p>
                </div>
              </div>
              <Button variant="outline" className="w-full border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all" asChild>
                <a href="tel:+353899854920">Call Now</a>
              </Button>
            </Card>
            
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-2 hover:border-secondary/50 group animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="flex items-center gap-5 mb-6">
                <div className="p-5 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl group-hover:scale-110 group-hover:shadow-lg transition-all">
                  <Linkedin className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 group-hover:text-secondary transition-colors">LinkedIn</h3>
                  <p className="text-muted-foreground text-sm">Connect professionally</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full border-2 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all"
                asChild
              >
                <a href="https://www.linkedin.com/in/mohsin-ali-5a3832185/" target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </Button>
            </Card>
            
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-2 hover:border-primary/50 group animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <div className="flex items-center gap-5 mb-6">
                <div className="p-5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl group-hover:scale-110 group-hover:shadow-lg transition-all">
                  <Github className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">GitHub</h3>
                  <p className="text-muted-foreground text-sm">Check out my code</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                asChild
              >
                <a href="https://github.com/Alifida1" target="_blank" rel="noopener noreferrer">
                  View GitHub
                </a>
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="mt-16 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-2 hover:border-primary/30 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                  Send Me a Message
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Name *</Label>
                    <Input id="name" placeholder="Your name" {...register("name")} disabled={isSubmitting} className="bg-background/50 backdrop-blur-sm border-2 focus:border-primary transition-all" />
                    {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Email *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" {...register("email")} disabled={isSubmitting} className="bg-background/50 backdrop-blur-sm border-2 focus:border-primary transition-all" />
                    {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-base">Subject *</Label>
                  <Input id="subject" placeholder="What's this about?" {...register("subject")} disabled={isSubmitting} className="bg-background/50 backdrop-blur-sm border-2 focus:border-primary transition-all" />
                  {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">Message *</Label>
                  <Textarea id="message" placeholder="Tell me about your project or inquiry..." rows={6} {...register("message")} disabled={isSubmitting} className="bg-background/50 backdrop-blur-sm border-2 focus:border-primary transition-all resize-none" />
                  {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto px-8 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all">
                  {isSubmitting ? <>
                      <span className="animate-pulse">Sending...</span>
                    </> : <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Mohsin Ali. All rights reserved. Built with passion for data analytics.</p>
        </div>
      </footer>
    </div>;
};
export default Index;