"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const keywordsData = [
  { keyword: "what to include on business card singapore", volume: 200, integration: "Title, Intro, Section 2" },
  { keyword: "business card design tips singapore", volume: 90, integration: "Sections 2 and 3" },
  { keyword: "business card layout 2025", volume: 50, integration: "Section 4" },
  { keyword: "business card ideas singapore", volume: 120, integration: "Throughout" },
  { keyword: "minimalist business card design", volume: 80, integration: "Section 5" },
  { keyword: "qr code business cards singapore", volume: 60, integration: "Section 6" },
]

const SOPArticleDisplay = () => {
  return (
    <div className="space-y-6">
       <div className="flex justify-end">
        <Button asChild>
          <a href="https://docs.google.com/document/d/10GBmw0x6Gi6WussiH4p42YOLdPIBrx5ujNEpyYPTl4o/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Edit Document</a>
        </Button>
      </div>
      <div className="bg-yellow-200 text-yellow-900 font-bold p-4 rounded-xl text-lg text-center">
        ⚠️ This is the blog outline for your consideration. The article will be finished on <span className="underline">18th April</span>.
      </div>
     

      <h1 className="text-3xl font-bold">What to Include on a Business Card in 2025 (Singapore Edition)</h1>

      <h2 className="text-2xl font-bold">1. Why Business Cards Still Matter in 2025</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Even in a digital world, cards create tactile impact</li>
        <li>Professional first impression = trust & memorability</li>
        <li>Particularly relevant in high-trust industries like finance, law, and real estate</li>
      </ul>

      <h2 className="text-2xl font-bold">2. Must-Have Elements on a Business Card</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Full Name & Job Title</li>
        <li>Company Name & Logo</li>
        <li>Phone Number, Email, and Website</li>
        <li>Business Address (if relevant)</li>
      </ul>

      <h2 className="text-2xl font-bold">3. Design Tips for Maximum Impact</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Stick to 1–2 typefaces for clarity</li>
        <li>Use white space for elegance and focus</li>
        <li>Contrast text and background for legibility</li>
      </ul>

      <h2 className="text-2xl font-bold">4. Business Card Layouts That Work in 2025</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Vertical vs horizontal formats</li>
        <li>Front-and-back printing: split branding vs contact info</li>
        <li>Symmetrical vs asymmetrical layouts</li>
      </ul>

      <h2 className="text-2xl font-bold">5. Minimalist Design Trends for Singapore Brands</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Black-and-white with gold foil</li>
        <li>Spot UV accents on matte paper</li>
        <li>Subtle typography and clean icons</li>
      </ul>

      <h2 className="text-2xl font-bold">6. Should You Include a QR Code on Your Card?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Pros: quick link to website or LinkedIn, trackable scans</li>
        <li>Best practices for QR placement and size</li>
        <li>When not to use one</li>
      </ul>

      <h2 className="text-2xl font-bold">7. Final Checklist Before Sending to Print</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Proofread multiple times</li>
        <li>Ensure colors are CMYK-ready</li>
        <li>Confirm bleed and trim lines with printer</li>
        <li>Request a physical proof if possible</li>
      </ul>

      <h2 className="text-2xl font-bold">8. Conclusion + CTA</h2>
      <p>Your business card isn’t just contact info – it’s your brand’s first impression.</p>
      <p className="font-bold">👉 Ready to create a business card that wows? <a href="#" className="text-primary underline">Get your free quote today →</a></p>
    </div>
  )
}

export default function Page() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">SEO Keyword Plan: Business Card Content</h1>
          <p className="mt-2 text-muted-foreground">
            Here's the SEO content plan and keyword analysis focused on business card design and layout in Singapore for 2025.
          </p>
        </header>

        {/* Keywords Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Keyword Analysis</CardTitle>
            <CardDescription>Primary + Secondary Keywords Focus</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Keyword</TableHead>
                    <TableHead>Volume</TableHead>
                    <TableHead>Integration</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {keywordsData.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{item.keyword}</TableCell>
                      <TableCell>{item.volume}</TableCell>
                      <TableCell>{item.integration}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Blog Outline Display */}
        <Card>
          <CardHeader>
            <CardTitle>Blog Article Outline</CardTitle>
          </CardHeader>
          <CardContent>
            <SOPArticleDisplay />
          </CardContent>
        </Card>
      </section>
    </main>
  )
}