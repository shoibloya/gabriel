"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const keywordsData = [
  { keyword: "cpf investment singapore", volume: 800, integration: "Title, Intro, Headers" },
  { keyword: "how to invest cpf savings", volume: 300, integration: "Section 1, 5" },
  { keyword: "cpf investment scheme guide", volume: 150, integration: "Section 2" },
  { keyword: "cpfis vs sa interest", volume: 70, integration: "Section 4" },
  { keyword: "best cpf investment options 2025", volume: 50, integration: "Section 7" },
  { keyword: "cpf special account investment", volume: 120, integration: "Section 4" },
  { keyword: "cpf investment step by step", volume: 90, integration: "Section 5" },
]

const SOPArticleDisplay = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button asChild>
          <a href="https://docs.google.com/document/d/1ucCR7a_9QnuTUJ--vSQryUPcrU9tEn-PbfiiajX-1OI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Edit Document</a>
        </Button>
      </div>
      <div className="bg-yellow-200 text-yellow-900 font-bold p-4 rounded-xl text-lg text-center">
        ⚠️ This is the blog outline for your consideration. The article will be finished on <span className="underline">4th April</span>.
      </div>
      <h1 className="text-3xl font-bold">How to Use Your CPF for Investments in Singapore (2025 Guide)</h1>

      <h2 className="text-2xl font-bold">1. Introduction: Why Invest Your CPF?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>CPF isn't just for retirement—it can grow faster through smart investments</li>
        <li>CPFIS as a gateway to potentially better returns</li>
        <li>Disclaimer: Know the risks, especially with SA funds</li>
      </ul>

      <h2 className="text-2xl font-bold">2. What Is the CPF Investment Scheme (CPFIS)?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Definition and purpose</li>
        <li>Who is eligible? (E.g. $20k in OA or $40k in SA)</li>
        <li>Basic pros and cons overview</li>
      </ul>

      <h2 className="text-2xl font-bold">3. Types of Investments Allowed Under CPFIS</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Unit trusts</li>
        <li>Investment-linked insurance</li>
        <li>Singapore Government Securities (SGS), T-bills</li>
        <li>ETFs and selected stocks</li>
        <li>Robo-advisors (mention if applicable in 2025)</li>
      </ul>

      <h2 className="text-2xl font-bold">4. CPF Ordinary Account vs Special Account for Investing</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Which one you can use and how much</li>
        <li>Trade-off: guaranteed interest vs potential returns</li>
        <li>Example scenario: Leave SA alone, use OA for flexibility</li>
      </ul>

      <h2 className="text-2xl font-bold">5. Step-by-Step: How to Start Investing Your CPF</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Step 1: Open a CPFIS-approved investment account</li>
        <li>Step 2: Choose your brokerage</li>
        <li>Step 3: Do your due diligence on product options</li>
        <li>Step 4: Invest through the platform</li>
        <li>Step 5: Monitor and rebalance annually</li>
      </ul>

      <h2 className="text-2xl font-bold">6. Risks and Considerations</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Market volatility</li>
        <li>Loss of guaranteed interest (esp. in SA)</li>
        <li>Fees and charges</li>
        <li>Long-term vs short-term thinking</li>
      </ul>

      <h2 className="text-2xl font-bold">7. Real Example: $20,000 CPF Investment Scenarios (2025 Edition)</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Conservative: SSBs or T-bills</li>
        <li>Balanced: Unit Trusts with low risk</li>
        <li>Aggressive: ETFs or direct equities</li>
        <li>Include a simple table or chart if possible</li>
      </ul>

      <h2 className="text-2xl font-bold">8. Should You Even Invest Your CPF?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Decision matrix: Are you risk-tolerant? Do you need liquidity?</li>
        <li>When it makes sense</li>
        <li>When to avoid</li>
      </ul>

      <h2 className="text-2xl font-bold">9. Conclusion + CTA</h2>
      <p>Need Help Making Sense of CPF Investing Options?</p>
      <p className="font-bold">👉 Our financial planners can help you build a personalized CPF investment strategy based on your goals. <a href="#" className="text-primary underline">Book a free consultation today →</a></p>
    </div>
  )
}

export default function Page() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6">
      <section className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">SEO Keyword Plan: CPF Investment Singapore</h1>
          <p className="mt-2 text-muted-foreground">
            Here's the SEO content plan and keyword analysis focused on CPF investment in Singapore for 2025.
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