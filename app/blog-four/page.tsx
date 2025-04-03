"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const keywordsData = [
  { keyword: "types of business card paper", volume: 150, integration: "Title, Section 1" },
  { keyword: "business card paper gsm singapore", volume: 90, integration: "Section 2" },
  { keyword: "matte vs glossy business cards", volume: 70, integration: "Section 3" },
  { keyword: "thick business cards singapore", volume: 60, integration: "Section 4" },
  { keyword: "luxury business card paper", volume: 50, integration: "Section 5" },
  { keyword: "best paper for business cards", volume: 110, integration: "Throughout" },
]

const SOPArticleDisplay = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button asChild>
          <a href="https://docs.google.com/document/d/1XrYETkn75SQVg5kv16JAWQAYKsFF9JKH2wVU6G2lDTg/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Edit Document</a>
        </Button>
      </div>
      <p className="bg-yellow-200 text-yellow-900 font-bold p-4 rounded-xl text-lg text-center">
  ⚠️ This is the blog outline for your consideration. The article will be finished on <span className="underline">4th April</span>.
</p>

      

      <h1 className="text-3xl font-bold">Business Card Paper Types Explained: How to Choose the Right One in Singapore</h1>

      <h2 className="text-2xl font-bold">1. Why Paper Type Matters for Business Cards</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Paper thickness and texture affect first impressions</li>
        <li>Feels = perceived value</li>
        <li>Luxury clients notice quality instantly</li>
      </ul>

      <h2 className="text-2xl font-bold">2. Understanding GSM: How Thick Should Your Card Be?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>What is GSM and why it matters</li>
        <li>Common GSM ranges (250–600+)</li>
        <li>Best GSM range for business cards in Singapore</li>
      </ul>

      <h2 className="text-2xl font-bold">3. Matte vs Glossy vs Textured Finishes</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Pros and cons of each finish</li>
        <li>When to choose matte (e.g., luxury, minimalism)</li>
        <li>When glossy works better (e.g., vibrant colors)</li>
        <li>Textured paper for tactile uniqueness</li>
      </ul>

      <h2 className="text-2xl font-bold">4. Thickness and Durability: What Makes a Card Feel Premium?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>How thickness translates to perceived luxury</li>
        <li>Layered and edge-painted card options</li>
        <li>Durability for networking events or wallets</li>
      </ul>

      <h2 className="text-2xl font-bold">5. Popular Business Card Paper Types in Singapore</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Cotton stock: soft and eco-friendly</li>
        <li>Linen stock: lightly textured elegance</li>
        <li>Silk-coated or suede finishes for a premium feel</li>
        <li>Recycled kraft paper for sustainability appeal</li>
      </ul>

      <h2 className="text-2xl font-bold">6. Conclusion + CTA</h2>
      <p>Your business card is often the first physical impression your brand makes—make it count with the right paper choice.</p>
      <p className="font-bold">👉 Want expert help picking the perfect paper? <a href="#" className="text-primary underline">Request your free quote today →</a></p>
    </div>
  )
}

export default function Page() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">SEO Keyword Plan: Business Card Paper Types</h1>
          <p className="mt-2 text-muted-foreground">
            Here's the SEO content plan and keyword analysis focused on choosing the right paper type for business cards in Singapore.
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
