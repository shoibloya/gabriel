"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const keywordsData = [
  { keyword: "cpf after death singapore", volume: 400, integration: "Title, Intro, Section 2" },
  { keyword: "legacy planning singapore", volume: 300, integration: "Title, Section 1, Conclusion" },
  { keyword: "what happens to cpf when you die singapore", volume: 150, integration: "Section 2" },
  { keyword: "cpf nomination singapore", volume: 90, integration: "Section 3" },
  { keyword: "cpf inheritance rules", volume: 70, integration: "Section 4" },
  { keyword: "cpf nomination vs will", volume: 50, integration: "Section 5" },
  { keyword: "how to update cpf nomination", volume: 60, integration: "Section 6" },
]

const SOPArticleDisplay = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button asChild>
          <a href="https://docs.google.com/document/d/1ZHaeT_3RaCVF7UFaOqB3Xpzs2Yz4T8ha7B3wfKqqs3U/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Edit Document</a>
        </Button>
      </div>
      <div className="bg-yellow-200 text-yellow-900 font-bold p-4 rounded-xl text-lg text-center">
        ⚠️ This is the blog outline for your consideration. The article will be finished on <span className="underline">4th April</span>.
      </div>
      <h1 className="text-3xl font-bold">Legacy Planning in Singapore: What Happens to Your CPF When You Pass Away?</h1>

      <h2 className="text-2xl font-bold">1. Why Legacy Planning Matters in Singapore</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Legacy planning isn't just for the ultra-wealthy</li>
        <li>In Singapore, CPF plays a major role in your estate</li>
        <li>Timely planning ensures your loved ones are protected</li>
      </ul>

      <h2 className="text-2xl font-bold">2. What Happens to Your CPF Savings When You Die?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>CPF savings are not covered under a will</li>
        <li>If no nomination is made, money is distributed via intestacy laws</li>
        <li>Breakdown of OA, SA, MA, and RA handling upon death</li>
      </ul>

      <h2 className="text-2xl font-bold">3. What Is a CPF Nomination and Why It’s Essential</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Definition of CPF Nomination</li>
        <li>How it affects your CPF distribution</li>
        <li>Types: cash, enhanced, or special needs nomination</li>
      </ul>

      <h2 className="text-2xl font-bold">4. CPF Inheritance Rules in Singapore</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Legal pathways if there is a nomination</li>
        <li>If there’s no nomination, how does the government decide?</li>
        <li>How long does the process take?</li>
      </ul>

      <h2 className="text-2xl font-bold">5. CPF Nomination vs a Will: What’s the Difference?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>CPF nominations operate outside your will</li>
        <li>Why CPF savings don’t follow your will’s instructions</li>
        <li>When to use both: best practices for holistic legacy planning</li>
      </ul>

      <h2 className="text-2xl font-bold">6. How to Update or Create a CPF Nomination</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Steps to make a CPF nomination online or in person</li>
        <li>What documents and witnesses are required</li>
        <li>How often should you review it?</li>
      </ul>

      <h2 className="text-2xl font-bold">7. Real-Life Scenario: What Happens Without a CPF Nomination?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Example: No nomination, CPF distributed by intestacy</li>
        <li>Possible delays and disputes among family</li>
        <li>Emotional and financial stress it can cause</li>
      </ul>

      <h2 className="text-2xl font-bold">8. Conclusion + CTA</h2>
      <p>Legacy planning isn’t optional if you want to protect your family.</p>
      <p className="font-bold">👉 Speak to our financial planning team to ensure your CPF and estate are aligned with your wishes. <a href="#" className="text-primary underline">Book a free consultation today →</a></p>
    </div>
  )
}

export default function Page() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">SEO Keyword Plan: CPF Legacy Planning</h1>
          <p className="mt-2 text-muted-foreground">
            Here's the SEO content plan and keyword analysis focused on CPF legacy and estate planning in Singapore.
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