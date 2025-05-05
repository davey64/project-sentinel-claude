import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BarChart3, Globe, Shield, Users } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Project Sentinel
              </h1>
              <p className="text-xl text-slate-200 md:text-2xl/relaxed lg:text-2xl/relaxed xl:text-3xl/relaxed">
                Comprehensive Strategic Analysis
              </p>
              <p className="text-slate-300 md:text-xl">
                Delivering Holistic Digital Sovereignty for High Net-Worth Individuals, Digital Creators, and Small &
                Family-Owned Businesses
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-slate-50 text-slate-900 hover:bg-slate-200">
                  <Link href="/executive-summary">
                    Read Executive Summary <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-slate-200 text-slate-200 hover:bg-slate-800"
                >
                  <Link href="/market-analysis">Explore Market Analysis</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Project Sentinel"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Highlights</h2>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl">
                Explore the comprehensive analysis of Project Sentinel's market opportunity and strategic positioning
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card>
              <CardHeader className="pb-2">
                <Globe className="h-6 w-6 text-slate-800 mb-2" />
                <CardTitle>Market Opportunity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Global cybersecurity market projected to exceed $500 billion by 2030, with a CAGR of 9.4-14.3%.
                </p>
                <Button asChild variant="link" className="p-0 h-auto mt-2">
                  <Link href="/market-analysis">Learn more</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Users className="h-6 w-6 text-slate-800 mb-2" />
                <CardTitle>Target Segments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Focused on three distinct niches: HNWIs & Families, Small & Family-Owned Businesses, and Digital
                  Creators.
                </p>
                <Button asChild variant="link" className="p-0 h-auto mt-2">
                  <Link href="/target-segments">Learn more</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Shield className="h-6 w-6 text-slate-800 mb-2" />
                <CardTitle>Value Proposition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Holistic Digital Sovereignty through a tech-enabled concierge service model integrating cybersecurity,
                  privacy, and asset protection.
                </p>
                <Button asChild variant="link" className="p-0 h-auto mt-2">
                  <Link href="/value-proposition">Learn more</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <BarChart3 className="h-6 w-6 text-slate-800 mb-2" />
                <CardTitle>Financial Outlook</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Significant revenue potential with strong LTV:CAC ratios due to high client retention and premium
                  service positioning.
                </p>
                <Button asChild variant="link" className="p-0 h-auto mt-2">
                  <Link href="/financial-projections">Learn more</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Report Sections */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore the Full Report</h2>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl">
                Navigate through the comprehensive analysis and strategic recommendations
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Executive Summary</CardTitle>
                <CardDescription>Overview of key findings and strategic recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 mb-4">
                  The global cybersecurity market presents a substantial opportunity, projected to exceed $500 billion
                  by 2030. Project Sentinel targets three distinct, underserved niche markets with a unique value
                  proposition centered on Holistic Digital Sovereignty.
                </p>
                <Button asChild>
                  <Link href="/executive-summary">
                    Read Executive Summary <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Market Analysis</CardTitle>
                <CardDescription>
                  Detailed examination of market size, trends, and segment-specific needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 mb-4">
                  The cybersecurity market is characterized by substantial scale and dynamic growth, fueled by an
                  increasingly complex threat landscape and accelerating digitalization of business and personal life.
                </p>
                <Button asChild>
                  <Link href="/market-analysis">
                    Explore Market Analysis <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Competitive Landscape</CardTitle>
                <CardDescription>Analysis of competitors, market gaps, and disruptive opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 mb-4">
                  The competitive landscape is diverse, comprising specialized niche players, large generalist firms,
                  and various indirect competitors offering adjacent services.
                </p>
                <Button asChild>
                  <Link href="/competitive-landscape">
                    View Competitive Analysis <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Strategic Recommendations</CardTitle>
                <CardDescription>Actionable recommendations and phased roadmap for execution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 mb-4">
                  Key strategic recommendations include focusing the initial launch, building the integration layer,
                  cultivating strategic partnerships, and prioritizing talent and trust.
                </p>
                <Button asChild>
                  <Link href="/strategic-recommendations">
                    See Recommendations <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/table-of-contents">View Complete Table of Contents</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}