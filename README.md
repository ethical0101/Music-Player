# 🎵 Music Player 🎵  

This is a simple Music Player web application built using **Django**, my very first Django project! 🎉 I referred to YouTube tutorials to learn and implement this.  

## 🚀 Features  
- Upload and play music files  
- Basic playback controls (Play, Pause, Next, Previous)  
- Playlist support  
- User-friendly interface  

## 🛠️ Tech Stack  
- **Backend:** Django  
- **Frontend:** HTML, CSS, JavaScript  
- **Database:** SQLite (default with Django)  

## 📌 Setup Instructions  
1. Clone this repository:  
   ```sh
   git clone https://github.com/ethical0101/Music-Player.git
   cd Music-Player
   ```

2. Create and activate a virtual environment:  
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install dependencies:  
   ```sh
   pip install -r requirements.txt
   ```

4. Apply migrations:  
   ```sh
   python manage.py migrate
   ```

5. Create a superuser to access the Django admin panel:  
   ```sh
   python manage.py createsuperuser
   ```
   Follow the prompts to set up your admin account.

6. Run the development server:  
   ```sh
   python manage.py runserver
   ```

7. Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser.  

## 🎵 Adding Songs via Admin Panel  
1. Access the Django admin panel by navigating to [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin).  
2. Log in using the superuser credentials you created earlier.  
3. In the admin panel, you’ll see a section for **Songs** (or the relevant model name).  
4. Click on **Add Song** and fill in the details:  
   - **Title**: Name of the song.  
   - **Artist**: Name of the artist.  
   - **Audio File**: Upload the music file.  
   - **Lyrics**: Add the lyrics (you can fetch them using `test.py` as explained below).  
5. Click **Save** to add the song to your music library.  

## 🎤 Fetching Lyrics Using `test.py`  
1. Run the `test.py` script:  
   ```sh
   python test.py
   ```
2. When prompted, enter the name of the song you want to fetch lyrics for.  
3. The script will fetch the lyrics (if available) and display them in the terminal.  
4. Copy the lyrics and paste them into the **Lyrics** field when adding a song in the Django admin panel.  

## 🎯 Future Improvements  
- Add user authentication  
- Implement music streaming  
- Enhance UI with modern design  

## 📜 License  
This project is open-source. Feel free to modify and improve! 😊  

---

### Repository Link  
🔗 [https://github.com/ethical0101/Music-Player](https://github.com/ethical0101/Music-Player)  
```

### Notes:
1. Ensure that your `test.py` script is functional and can fetch lyrics from a reliable source (e.g., an API or web scraping).
2. If your `test.py` script requires additional dependencies, mention them in the `requirements.txt` file.
3. If you have a specific structure for your models (e.g., `Song` model with fields like `title`, `artist`, `audio_file`, and `lyrics`), make sure it matches the instructions provided.

Let me know if you need further assistance! 😊
