import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github, Database, BarChart3, Brain, FileSpreadsheet, Code, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
      <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <Badge className="bg-accent text-accent-foreground px-4 py-2 text-sm">
                  Data Analyst & Freelance Consultant
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Mohsin Ali
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Transforming raw data into actionable insights through advanced analytics, visualization, and machine learning.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  View Portfolio
                </Button>
                <Button size="lg" variant="outline">
                  Contact Me
                </Button>
              </div>
              <div className="flex gap-4 pt-6">
                <a href="mailto:mohsinalimughal96@gmail.com" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:+353899854920" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 blur-2xl"></div>
                <div className="relative aspect-square rounded-full overflow-hidden border-8 border-accent shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
                        <Database className="w-16 h-16 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Profile Photo Placeholder</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-card p-4 rounded-2xl shadow-lg border border-border">
                  <p className="text-3xl font-bold text-primary">3+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">About Me</Badge>
            <h2 className="text-4xl font-bold mb-4">Designing Solutions, Not Just Visuals</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate Data Analyst with a strong academic foundation and hands-on experience in turning complex data into strategic business insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Projects and Case Studies</h3>
                  <p className="text-muted-foreground">
                    Successfully delivered end-to-end data analytics projects including predictive modeling, ETL pipelines, and interactive dashboards.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">6+ Years of Experience</h3>
                  <p className="text-muted-foreground">
                    Extensive expertise in data science, analytics, and business intelligence across various domains and technologies.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">MSc in Data Analytics</h4>
                    <p className="text-muted-foreground">National College of Ireland • 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                    <Database className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">BSc in Data Science</h4>
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
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Portfolio</Badge>
            <h2 className="text-4xl font-bold mb-4">Projects and Case Studies</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-all group">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <BarChart3 className="w-16 h-16 text-primary" />
              </div>
              <div className="p-6">
                <Badge className="mb-3">Power BI</Badge>
                <h3 className="text-xl font-bold mb-2">Sales Analytics Dashboard</h3>
                <p className="text-muted-foreground">
                  Interactive dashboard visualizing sales, operations, and financial KPIs for data-driven decision making.
                </p>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-2xl transition-all group">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <Brain className="w-16 h-16 text-accent" />
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-accent text-accent-foreground">Machine Learning</Badge>
                <h3 className="text-xl font-bold mb-2">Renewable Energy Prediction</h3>
                <p className="text-muted-foreground">
                  Predictive model using Random Forest & SVM for renewable energy consumption forecasting.
                </p>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-2xl transition-all group">
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <Database className="w-16 h-16 text-secondary" />
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-secondary text-secondary-foreground">ETL Pipeline</Badge>
                <h3 className="text-xl font-bold mb-2">MongoDB to PostgreSQL</h3>
                <p className="text-muted-foreground">
                  Efficient ETL pipeline for diabetes data migration and transformation between databases.
                </p>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-2xl transition-all group">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-primary" />
              </div>
              <div className="p-6">
                <Badge className="mb-3">Tableau</Badge>
                <h3 className="text-xl font-bold mb-2">Predictive Model Performance</h3>
                <p className="text-muted-foreground">
                  Interactive Tableau reports showcasing machine learning model performance metrics.
                </p>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-2xl transition-all group">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                <FileSpreadsheet className="w-16 h-16 text-accent" />
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-accent text-accent-foreground">Big Data</Badge>
                <h3 className="text-xl font-bold mb-2">Business Intelligence Project</h3>
                <p className="text-muted-foreground">
                  Comprehensive BI solution analyzing Alibaba data for strategic business insights.
                </p>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-2xl transition-all group border-2 border-primary">
              <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <p className="text-4xl font-bold mb-2">+</p>
                  <p className="text-lg">View More</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">More Projects Coming Soon</h3>
                <p className="text-muted-foreground">
                  Continuously working on new and exciting data analytics projects.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Skills</Badge>
            <h2 className="text-4xl font-bold">Technical Expertise</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Programming & Analytics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Python</span>
                    <span className="text-muted-foreground">95%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">SQL</span>
                    <span className="text-muted-foreground">90%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Machine Learning</span>
                    <span className="text-muted-foreground">85%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-[85%]"></div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Visualization & Tools</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Power BI</span>
                    <span className="text-muted-foreground">90%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent to-primary w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Tableau</span>
                    <span className="text-muted-foreground">85%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent to-primary w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">ETL & Data Pipelines</span>
                    <span className="text-muted-foreground">88%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent to-primary w-[88%]"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Technologies & Libraries</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2">Pandas</Badge>
                <Badge variant="secondary" className="px-4 py-2">NumPy</Badge>
                <Badge variant="secondary" className="px-4 py-2">Matplotlib</Badge>
                <Badge variant="secondary" className="px-4 py-2">Seaborn</Badge>
                <Badge variant="secondary" className="px-4 py-2">Scikit-learn</Badge>
                <Badge variant="secondary" className="px-4 py-2">MS SQL Server</Badge>
                <Badge variant="secondary" className="px-4 py-2">PostgreSQL</Badge>
                <Badge variant="secondary" className="px-4 py-2">MySQL</Badge>
                <Badge variant="secondary" className="px-4 py-2">MongoDB</Badge>
                <Badge variant="secondary" className="px-4 py-2">ETL Pipelines</Badge>
                <Badge variant="secondary" className="px-4 py-2">Data Governance</Badge>
                <Badge variant="secondary" className="px-4 py-2">Statistical Analysis</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Contact</Badge>
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your data into actionable insights? Get in touch!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">mohsinalimughal96@gmail.com</p>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <a href="mailto:mohsinalimughal96@gmail.com">Send Email</a>
              </Button>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+353 89 985 4920</p>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <a href="tel:+353899854920">Call Now</a>
              </Button>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-muted-foreground">Connect professionally</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Github className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <p className="text-muted-foreground">Check out my code</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View GitHub
              </Button>
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
    </div>
  );
};

export default Index;
