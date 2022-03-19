import React from 'react';
import user_pic from './images/user_pic_test.jpg'
import post_pic from './images/post_pic_test.jpeg'

function App() {
  return (
    <div className="App">
     <nav className="top_bar">
            <a href='' className='top_but'>Что-то</a>
            <a href='' className='top_but'>И вот это</a>
        </nav>
        <header className='top_nav margin'>
            <a href='' className='logo_text'>Смешные картинки</a>
        </header>
        
        <main className="margin">
            <nav className="top_nav first">
                <div className="few_things top_nav">
                    <a href='' className="button active_b">Лента</a>
                    <a href='' className="button">О проекте</a>
                    <a href='' className="button">Кнопка</a>
                </div>
                <a href='/' className="button random_post">Случайный пост {'>'}</a>
                <div className='search_menu button'>
                    <form >
                        <input id='search_field' type="text" placeholder='Поиск'/>
                        <input id='submit_button' type="submit" value='Поиск'/>
                    </form>
                </div>
                
            </nav>
            <nav className="second">
                <a href='' className="button active_b">всё</a>
                <a href='' className="button b_second">хорошее</a>
                <a href='' className="button b_second">лучшее</a>
            </nav>
            <div className="background">
                 <section className="content">
                    <div className='card'>
                        <div className='user_info'>
                            <img className='user_pic' src={user_pic}></img>
                            <a href='' className='user_name'>Имя_пользователь</a>
                        </div>
                        <div>
                            <div className='tag_block'>
                                <a href='' className='tag'>Тег1</a>
                                <a href='' className='tag'>Тег2</a>
                                <a href='' className='tag'>Тег3</a>
                            </div>
                            <p className='post_text'>Тут наверно может быть какой то текст но он собственно не очень то обязателен</p>
                            <img className='post_pic' src={post_pic}></img>
                            <div className='post_info'>
                                <span className='publish_date'>18.Mar.2022 00:38</span>
                                <div className='rating_info'>
                                    <span className='rating'>1.5</span>
                                    <a href='' className='plus'>+</a>
                                    <a href='' className='minus'>-</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
                <nav className="right_bar">
                    <div className='segment_nav'>
                        <h1 className='title'>Привет!</h1>
                        <p className='text'>Возможно какой то полезный текст</p>
                        <a href='' className='new_post'>Кнопка</a>
                    </div>
                    <div className='segment_nav'>
                        <h1 className='title'>большие теги</h1>
                        <ul>
                            <li>
                                <a href='' className='tag_big one'>Тег 1</a>
                            </li>
                            <li>
                                <a href='' className='tag_big two'>Тег 2</a>
                            </li>
                            <li>
                                <a href='' className='tag_big tree'>Тег 3</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
           
            
            
        </main>
        <footer className='margin footer'>
            <p className='text_footer'>2022</p>
        </footer>
    </div>
  );
}

export default App;
