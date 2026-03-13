import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Target, Users, Award, BookOpen, Building2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <GraduationCap className="h-10 w-10 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About MGM University Job Portal</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering students and connecting them with career opportunities through innovative placement management
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Target className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To bridge the gap between talented students and leading companies by providing a streamlined,
                efficient, and transparent placement management system that empowers every student to achieve
                their career aspirations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Award className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To become the premier placement portal for educational institutions across India,
                fostering meaningful connections between academia and industry while ensuring 100%
                placement opportunities for deserving students.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* About MGM University */}
        <Card className="mb-12">
          <CardHeader>
            <Building2 className="h-12 w-12 text-primary mb-2" />
            <CardTitle className="text-2xl">About MGM University</CardTitle>
            <CardDescription>Multidisciplinary NEP 2020 Aligned University</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              MGM University, located in Chhatrapati Sambhajinagar (Aurangabad), Maharashtra, is a premier
              institution committed to providing quality education aligned with the National Education Policy 2020.
              The university offers multidisciplinary programs designed to nurture holistic development and prepare
              students for the challenges of the modern world.
            </p>
            <p className="text-muted-foreground">
              Our state-of-the-art campus provides students with world-class infrastructure, experienced faculty,
              and industry connections that facilitate seamless transitions from academia to professional careers.
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Platform Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>For Students</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Browse job opportunities</li>
                  <li>• AI-powered skill matching</li>
                  <li>• Easy application tracking</li>
                  <li>• Resume management</li>
                  <li>• Real-time notifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>For Companies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Post job openings</li>
                  <li>• Access talented students</li>
                  <li>• Filter by skills & CGPA</li>
                  <li>• Application management</li>
                  <li>• Campus recruitment tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-2" />
                <CardTitle>For Colleges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Student management</li>
                  <li>• Placement analytics</li>
                  <li>• Company collaboration</li>
                  <li>• Performance tracking</li>
                  <li>• Comprehensive reports</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
