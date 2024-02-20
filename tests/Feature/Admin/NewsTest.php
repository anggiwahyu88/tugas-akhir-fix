<?php

namespace Tests\Feature\Admin;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use App\Models\News_categorys;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile as HttpUploadedFile;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class NewsTest extends TestCase
{
    use RefreshDatabase;

    public function test_upload_news_can_be_rendered(): void
    {
        $user = User::factory()->admin()->create();
        $category = News_categorys::factory()->create();
        $response = $this->actingAs($user)->get('dashboard/news/upload');
        $response->assertStatus(200)->assertSessionHasNoErrors()->assertInertia(
            fn (Assert $page) => $page
                ->component("Admin/FormNews")
                ->has(
                    "option.1",
                    fn (Assert $page) => $page
                        ->where("title", $category->name)
                        ->where("value", $category->id)
                        ->etc()
                )
        );
    }

    public function test_new_news_can_upload(): void
    {
        $user = User::factory()->admin()->create();
        $category = News_categorys::factory()->create();
        $file = HttpUploadedFile::fake()->image('thumbnail.jpg');
        $response = $this->actingAs($user)->post('dashboard/news', [
            'title' => fake()->sentence(),
            'content' => "<p>lorem</p>",
            'thumnil' => $file,
            'category' => $category->id,
        ]);
        $response->assertRedirect('/dashboard')->assertSessionHasNoErrors();
    }

    public function test_list_news_can_be_rendered(): void
    {
        $user = User::factory()->admin()->create();
        $news = News::factory(3)->author($user->id)->create();
        $news = NewsCollection::collection($news->loadMissing('author:id,name,email', 'category'));
        $response = $this->actingAs($user)->get('dashboard/news');
        $response->assertStatus(200)->assertSessionHasNoErrors()->assertInertia(
            fn (Assert $page) => $page
                ->component("Admin/NewsUpdate")
                ->has(
                    'news.data.0',
                    fn (Assert $page) => $page
                        ->where("id", $news[0]->id)
                        ->where("title", $news[0]->title)
                        ->where("content", $news[0]->content)
                        ->where("thumnil", $news[0]->thumnil)
                        ->where("category", $news[0]->category)
                        ->where("author", $news[0]->author)
                        ->etc()
                )
        );
    }

    public function test_update_news_can_be_rendered(): void
    {
        $user = User::factory()->admin()->create();
        $category = News_categorys::factory()->create();
        $news = News::factory()->author($user->id)->category($category->id)->create();

        $response = $this->actingAs($user)->get('dashboard/news/' . $news->id);
        $response->assertStatus(200)
        ->assertSessionHasNoErrors()
        ->assertInertia(
            fn (Assert $page) => $page
                ->component("Admin/FormNews")
                
                ->has(
                    "news",
                    fn (Assert $page) => $page
                        ->where("id", $news->id)
                        ->where("title", $news->title)
                        ->where("content", $news->content)
                        ->where("thumnil", $news->thumnil)
                        ->where("id_category", $news->id_category)
                        ->where("id_author", $user->id)
                        ->etc()
                )
                ->has(
                    "option.1",
                    fn (Assert $page) => $page
                        ->where("title", $category->name)
                        ->where("value", $category->id)
                        ->etc()
                )
        );
    }

    public function test_news_can_update(): void
    {
        $user = User::factory()->admin()->create();
        $news = News::factory()->author($user->id)->create();
        $file = HttpUploadedFile::fake()->image('thumbnail.jpg');
        $response = $this->actingAs($user)->put('dashboard/news/' . $news->id, [
            'title' => fake()->sentence(),
            'content' => "<p>lorem<p>",
            'thumnil' => $file,
            'category' => $news->id_category,
        ]);
        $response->assertRedirect('/dashboard')->assertSessionHasNoErrors();
    }

    public function test_news_can_delete(): void
    {
        $user = User::factory()->admin()->create();
        $news = News::factory()->author($user->id)->create();
        $response = $this->actingAs($user)->delete('dashboard/news/' . $news->id);
        $response->assertRedirect('/dashboard')->assertSessionHasNoErrors();
    }

    public function test_unauthorized_user_cannot_access_features(): void
    {
        $user = User::factory()->create();

        $response_delete = $this->actingAs($user)->delete('dashboard/news/1');
        $response_delete->assertStatus(401);

        $response_render_upload = $this->actingAs($user)->get('dashboard/news/upload');
        $response_render_upload->assertStatus(401);

        $category = News_categorys::factory()->create();
        $file = HttpUploadedFile::fake()->image('thumbnail.jpg');
        $response_upload = $this->actingAs($user)->post('dashboard/news', [
            'title' => fake()->sentence(),
            'content' => fake()->paragraph(),
            'thumbnail' => $file,
            'category' => $category->id,
        ]);
        $response_upload->assertStatus(401);

        News::factory()->author($user->id)->create();
        $response_list_news = $this->actingAs($user)->get('dashboard/news');
        $response_list_news->assertStatus(401);

        $news = News::factory()->author($user->id)->create();
        $file = HttpUploadedFile::fake()->image('thumbnail.jpg');
        $response_update_news = $this->actingAs($user)->put('dashboard/news/' . $news->id, [
            'title' => fake()->sentence(),
            'content' => "<p>lorem<p>",
            'thumbnail' => $file,
            'category' => $news->id_category,
        ]);
        $response_update_news->assertStatus(401);
    }
}
