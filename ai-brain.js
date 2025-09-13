const aiResponse = document.getElementById("ai-response");

function aiBrain() {
    const command = document.getElementById("commandInput").value.toLowerCase();

    if (command.includes("cv")) {
        window.open('cv/Akhil_CV.pdf', '_blank');
        speak("Opening your CV");
    } else if (command.includes("ai") || command.includes("ml")) {
        aiResponse.innerHTML = "<p>AI & ML: Python libraries, TensorFlow, PyTorch, predictive models, chatbots.</p>";
        speak("I have AI and ML experience using Python, TensorFlow, and PyTorch.");
    } else if (command.includes("cloud")) {
        aiResponse.innerHTML = "<p>Cloud: AWS, Azure, Google Cloud, cloud deployment projects.</p>";
        speak("I have cloud computing experience on AWS, Azure, and Google Cloud.");
    } else if (command.includes("cybersecurity")) {
        aiResponse.innerHTML = "<p>Cybersecurity: Ethical hacking, network security, vulnerability assessment.</p>";
        speak("I practice ethical hacking and network security.");
    } else if (command.includes("contact")) {
        aiResponse.innerHTML = "<p>Phone: 9389792567 | Email: akhil00980@gmail.com</p>";
        speak("Here is my contact information.");
    } else {
        aiResponse.innerHTML = "<p>Command not recognized. Try: CV, AI, ML, Cloud, Cybersecurity, Contact.</p>";
        speak("Command not recognized. Try CV, AI, ML, Cloud, Cybersecurity, Contact.");
    }
}

function speak(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.rate = 1;
    window.speechSynthesis.speak(msg);
}
