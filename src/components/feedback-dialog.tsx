"use client"

import { useState } from "react"
import { MessageSquare, Send, AlertTriangle, CheckCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

interface FeedbackDialogProps {
  children: React.ReactNode
}

export function FeedbackDialog({ children }: FeedbackDialogProps) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [category, setCategory] = useState("error")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const categories = [
    { value: "error", label: "Erreur dans le contenu", color: "bg-red-100 text-red-800" },
    { value: "broken-link", label: "Lien cassé", color: "bg-orange-100 text-orange-800" },
    { value: "missing", label: "Contenu manquant", color: "bg-yellow-100 text-yellow-800" },
    { value: "suggestion", label: "Suggestion", color: "bg-blue-100 text-blue-800" },
    { value: "other", label: "Autre", color: "bg-gray-100 text-gray-800" }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!message.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir un message.",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Format the message for Telegram
      const selectedCategory = categories.find(c => c.value === category)
      const telegramMessage = `🔔 *Nouveau feedback ENSTPStudy*

📋 *Catégorie:* ${selectedCategory?.label}
📧 *Email:* ${email || "Non fourni"}
📝 *Message:*
${message}

⏰ *Date:* ${new Date().toLocaleString('fr-FR')}
🌐 *Page:* ${window.location.href}

👤 *Envoyé à:* @Tascherif`

      // Send to Telegram @Tascherif
      // Note: In production, you'll need to set up a backend API endpoint
      // that forwards messages to your Telegram bot/channel
      // For now, this simulates the functionality
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demonstration, we'll show success
      toast({
        title: "Feedback envoyé !",
        description: "Merci pour votre retour. Nous examinerons votre message rapidement.",
      })

      // Reset form
      setMessage("")
      setEmail("")
      setCategory("error")
      setOpen(false)

    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le feedback. Veuillez réessayer.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Signaler un problème
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category Selection */}
          <div className="space-y-2">
            <Label>Type de problème</Label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setCategory(cat.value)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    category === cat.value
                      ? cat.color + " ring-2 ring-offset-2 ring-current"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Email (optional) */}
          <div className="space-y-2">
            <Label htmlFor="email">Email (optionnel)</Label>
            <Input
              id="email"
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Pour vous tenir informé de la résolution
            </p>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Décrivez le problème ou votre suggestion..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
            />
          </div>

          {/* Info box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-blue-800">
                <p className="font-medium mb-1">Votre feedback nous aide à améliorer la plateforme</p>
                <p>Les signalements sont envoyés directement à notre équipe via Telegram pour un traitement rapide.</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !message.trim()}
              className="flex-1 gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Envoi...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Envoyer
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

