'use client'

import React, { useState } from 'react'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ContactFormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [state, setState] = useState<ContactFormState>({
    status: 'idle',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setState({
        status: 'error',
        message: 'Please fill in all fields.',
      })
      return
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setState({
        status: 'error',
        message: 'Please enter a valid email address.',
      })
      return
    }

    setState({ status: 'loading', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to send message')
      }

      setState({
        status: 'success',
        message: 'Message sent! We\'ll be in touch within 48 hours.',
      })

      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={state.status === 'loading'}
          className="w-full px-4 py-3 border border-black text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={state.status === 'loading'}
          className="w-full px-4 py-3 border border-black text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50"
          required
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          disabled={state.status === 'loading'}
          className="w-full px-4 py-3 border border-black text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50"
          required
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={state.status === 'loading'}
          rows={6}
          className="w-full px-4 py-3 border border-black text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 resize-none"
          required
        />
      </div>

      {/* Status Messages */}
      {state.status === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-800">
          ✓ {state.message}
        </div>
      )}
      {state.status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800">
          ✗ {state.message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.status === 'loading'}
        className="w-full px-6 py-3 bg-black text-white font-medium hover:bg-gray-900 disabled:opacity-50 transition-colors"
      >
        {state.status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
