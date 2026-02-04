import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle className="text-2xl">Experiments Lab</CardTitle>
            <Badge variant="secondary">v0.1</Badge>
          </div>
          <CardDescription>
            A playground for vibe coding interesting interfaces and user
            experiences. Built with React, Tailwind CSS, and shadcn/ui.
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            Edit <code className="font-mono text-foreground bg-muted px-1.5 py-0.5 rounded">src/App.tsx</code> to start building.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button>Get Started</Button>
            <Button variant="outline">Documentation</Button>
            <Button variant="ghost">Learn More</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
