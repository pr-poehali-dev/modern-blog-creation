import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const posts = [
    {
      id: 1,
      type: 'news',
      title: 'Новые технологии в веб-разработке',
      description: 'Обзор самых актуальных трендов и инструментов для современных разработчиков',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      author: 'Алексей Петров',
      date: '24 сентября',
      readTime: '5 мин',
      tags: ['технологии', 'веб-разработка']
    },
    {
      id: 2,
      type: 'photo',
      title: 'Закат над городом',
      description: 'Потрясающие кадры заката, снятые с крыши небоскрёба',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      author: 'Мария Сидорова',
      date: '23 сентября',
      readTime: '2 мин',
      tags: ['фотография', 'природа']
    },
    {
      id: 3,
      type: 'video',
      title: 'Как создать современный дизайн',
      description: 'Пошаговое руководство по созданию минималистичного дизайна интерфейсов',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
      author: 'Дмитрий Козлов',
      date: '22 сентября',
      readTime: '12 мин',
      tags: ['дизайн', 'ui/ux']
    },
    {
      id: 4,
      type: 'news',
      title: 'Искусственный интеллект в 2024',
      description: 'Анализ развития ИИ-технологий и их влияния на различные сферы жизни',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      author: 'Елена Волкова',
      date: '21 сентября',
      readTime: '8 мин',
      tags: ['ИИ', 'технологии', 'будущее']
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'news': return 'Newspaper';
      case 'photo': return 'Camera';
      case 'video': return 'Video';
      default: return 'FileText';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'news': return 'bg-blue-100 text-blue-800';
      case 'photo': return 'bg-green-100 text-green-800';
      case 'video': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold font-inter text-gray-900">Modern Blog</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Новости</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Фотогалерея</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Видео</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">О проекте</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button size="sm" className="hidden md:block">
              <Icon name="Bell" size={16} className="mr-2" />
              Подписаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-inter mb-4 animate-fade-in">
            Современный блог
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Делитесь новостями, фотографиями и видео с сообществом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <form onSubmit={handleSubscribe} className="flex w-full gap-2">
              <Input
                type="email"
                placeholder="Ваш email для уведомлений"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-gray-900 border-0"
                required
              />
              <Button type="submit" variant="secondary" className="px-6">
                {subscribed ? (
                  <>
                    <Icon name="Check" size={16} className="mr-2" />
                    Готово!
                  </>
                ) : (
                  <>
                    <Icon name="Mail" size={16} className="mr-2" />
                    Подписаться
                  </>
                )}
              </Button>
            </form>
          </div>
          {subscribed && (
            <p className="text-sm mt-4 text-green-200 animate-fade-in">
              ✅ Спасибо! Вы подписались на уведомления о новых постах
            </p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <Icon name="Grid3X3" size={16} />
              Все посты
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center gap-2">
              <Icon name="Newspaper" size={16} />
              Новости
            </TabsTrigger>
            <TabsTrigger value="photo" className="flex items-center gap-2">
              <Icon name="Camera" size={16} />
              Фото
            </TabsTrigger>
            <TabsTrigger value="video" className="flex items-center gap-2">
              <Icon name="Video" size={16} />
              Видео
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className={`absolute top-3 left-3 ${getTypeColor(post.type)}`}>
                      <Icon name={getTypeIcon(post.type)} size={14} className="mr-1" />
                      {post.type === 'news' ? 'Новость' : post.type === 'photo' ? 'Фото' : 'Видео'}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-inter text-lg leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Icon name="User" size={14} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {post.readTime}
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="news">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.filter(post => post.type === 'news').map((post, index) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-blue-100 text-blue-800">
                      <Icon name="Newspaper" size={14} className="mr-1" />
                      Новость
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-inter text-lg leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Icon name="User" size={14} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {post.readTime}
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="photo">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.filter(post => post.type === 'photo').map((post, index) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-green-100 text-green-800">
                      <Icon name="Camera" size={14} className="mr-1" />
                      Фото
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-inter text-lg leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Icon name="User" size={14} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {post.readTime}
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      Посмотреть
                      <Icon name="Eye" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="video">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.filter(post => post.type === 'video').map((post, index) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-purple-100 text-purple-800">
                      <Icon name="Video" size={14} className="mr-1" />
                      Видео
                    </Badge>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors cursor-pointer">
                        <Icon name="Play" size={24} className="text-purple-600" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-inter text-lg leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Icon name="User" size={14} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {post.readTime}
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      Смотреть
                      <Icon name="Play" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-inter font-semibold text-gray-900 mb-4">Modern Blog</h3>
              <p className="text-gray-600 text-sm">
                Современная платформа для обмена новостями, фотографиями и видео с сообществом.
              </p>
            </div>
            <div>
              <h4 className="font-inter font-semibold text-gray-900 mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Фотогалерея</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Видео</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">О проекте</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-inter font-semibold text-gray-900 mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Условия</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Конфиденциальность</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-inter font-semibold text-gray-900 mb-4">Подписка</h4>
              <p className="text-sm text-gray-600 mb-4">
                Получайте уведомления о новых постах
              </p>
              <div className="flex items-center gap-4">
                <Icon name="Mail" size={20} className="text-primary" />
                <Icon name="Bell" size={20} className="text-primary" />
                <Icon name="Rss" size={20} className="text-primary" />
              </div>
            </div>
          </div>
          <div className="border-t pt-8 mt-8">
            <p className="text-center text-sm text-gray-500">
              © 2024 Modern Blog. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;