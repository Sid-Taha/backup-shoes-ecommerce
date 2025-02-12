import jsPDF from "jspdf"

export const generatePDF = async () => {
  const doc = new jsPDF()

  // Add content to the PDF
  doc.setFontSize(20)
  doc.text("Payment Confirmation", 105, 20, { align: "center" })

  doc.setFontSize(12)
  doc.text("Thank you for your purchase!", 20, 40)

  doc.setFontSize(14)
  doc.text("Order Details:", 20, 60)

  doc.setFontSize(12)
  doc.text("Order #: 1234567890", 30, 70)
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 30, 80)
  doc.text("Total: $99.99", 30, 90)

  doc.setFontSize(10)
  doc.text("This is your official payment slip. Please keep it for your records.", 20, 110)

  // Save the PDF
  doc.save("payment_confirmation.pdf")
}

