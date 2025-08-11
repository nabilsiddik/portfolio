export const downloadFileFromGoogleDrive = (fileId: string) => {
    const link = document.createElement('a')
    link.href = `https://drive.google.com/uc?export=download&id=${fileId}`
    link.download = 'Nabil-Siddik-Resume.pdf'
    link.click()
}