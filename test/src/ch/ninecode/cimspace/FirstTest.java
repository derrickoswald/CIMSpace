package ch.ninecode.cimspace;

import java.nio.file.Paths;
import java.util.*;

import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;

/**
 * Selenium test for CIMSpace.
 *
 * Initial attempt.
 *
 * You will need the FirefoxDriver:
 * 1) Go to the geckodriver reslease page: https://github.com/mozilla/geckodriver/releases
 * 2) Download an appropriate version
 * 3) Extract the driver : tar --extract --gunzip --verbose < geckodriver*
 * 4) Set the environment variable to point to it: webdriver.gecko.driver=./geckodriver
 */
public class FirstTest
{
    private WebDriver driver;
    private Map<String, Object> vars;
    JavascriptExecutor js;

    @Before
    public void setUp ()
    {
        driver = new FirefoxDriver ();
        js = (JavascriptExecutor) driver;
        vars = new HashMap<String, Object> ();
    }

    @After
    public void tearDown ()
    {
        driver.quit ();
    }

    @Test
    public void firsttest ()
    {
        String s = Paths.get ("").toAbsolutePath ().toString ();
        driver.get ("file://" + s + "/../index.html");
        driver.manage().window().setSize (new Dimension (1280, 1040));

        WebDriverWait wait = new WebDriverWait (driver, 30000);
        wait.until (ExpectedConditions.visibilityOfElementLocated (By.cssSelector (".mapbox-improve-map")));
        WebElement load_files = wait.until (ExpectedConditions.visibilityOfElementLocated (By.id ("load_files")));
        new Actions (driver).click (load_files).perform ();
        WebElement button = wait.until (ExpectedConditions.visibilityOfElementLocated (By.id ("connect")));
        new Actions (driver).click (button).perform ();
        wait.until (ExpectedConditions.titleContains ("DemoData"));
        WebElement info = wait.until (ExpectedConditions.visibilityOfElementLocated (By.cssSelector (".mapboxgl-ctrl-icon:nth-child(5)")));
        new Actions (driver).click (info).perform ();
        wait.until (ExpectedConditions.visibilityOfElementLocated (By.id ("view_contents")));
        try
        {
            Thread.sleep (2000);
        }
        catch (InterruptedException e)
        {
            e.printStackTrace ();
        }
        WebElement canvas = wait.until (ExpectedConditions.visibilityOfElementLocated (By.cssSelector (".mapboxgl-canvas")));
        new Actions (driver).moveToElement (canvas, -33, 13).click ().perform ();
        WebElement title = wait.until (ExpectedConditions.visibilityOfElementLocated (By.cssSelector (".info_title")));
        assertEquals (title.getText (), "CAB0023");
        WebElement details = wait.until (ExpectedConditions.visibilityOfElementLocated (By.cssSelector ("div:nth-child(6) > a")));
        new Actions (driver).click (details).perform ();
        title = wait.until (ExpectedConditions.visibilityOfElementLocated (By.cssSelector (".info_title")));
        assertEquals (title.getText (), "_e6146ff6-4bd4-4c69-99f0-915e87a482bf");
    }
}
